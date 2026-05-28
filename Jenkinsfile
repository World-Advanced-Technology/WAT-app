pipeline {
    agent any

    environment {
        IMAGE_NAME      = 'wat-website'
        DOCKER_REGISTRY = 'docker.io'
        DOCKER_USER     = credentials('DOCKER_USERNAME')
        KUBE_NAMESPACE  = 'production'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
                echo "Branch: ${env.BRANCH_NAME} | Build: ${env.BUILD_NUMBER}"
            }
        }

        stage('Validate') {
            steps {
                sh '''
                    echo "Validating project files..."
                    test -f index.html     || (echo "ERROR: index.html missing" && exit 1)
                    test -f Dockerfile     || (echo "ERROR: Dockerfile missing" && exit 1)
                    test -f deployment.yml || (echo "ERROR: deployment.yml missing" && exit 1)
                    test -f pom.xml        || (echo "ERROR: pom.xml missing" && exit 1)
                    grep -q "World Advanced Technology" index.html || (echo "ERROR: index.html content invalid" && exit 1)
                    echo "All validations passed."
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh """
                    docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} .
                    docker tag ${IMAGE_NAME}:${BUILD_NUMBER} ${IMAGE_NAME}:latest
                    echo "Image built: ${IMAGE_NAME}:${BUILD_NUMBER}"
                """
            }
        }

        stage('Test Container') {
            steps {
                sh """
                    docker run -d -p 8081:80 --name wat-test-${BUILD_NUMBER} ${IMAGE_NAME}:${BUILD_NUMBER}
                    sleep 5
                    curl -sf http://localhost:8081/ | grep -q "World Advanced Technology" && echo "Health check PASSED" || (echo "Health check FAILED" && exit 1)
                    docker stop wat-test-${BUILD_NUMBER} && docker rm wat-test-${BUILD_NUMBER}
                """
            }
            post {
                failure {
                    sh "docker stop wat-test-${BUILD_NUMBER} || true && docker rm wat-test-${BUILD_NUMBER} || true"
                }
            }
        }

        stage('Push to Registry') {
            when {
                branch 'main'
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'DOCKER_CREDENTIALS_ID', usernameVariable: 'DOCKER_USR', passwordVariable: 'DOCKER_PWD')]) {
                    sh """
                        echo "$DOCKER_PWD" | docker login -u "$DOCKER_USR" --password-stdin
                        docker tag ${IMAGE_NAME}:${BUILD_NUMBER} ${DOCKER_REGISTRY}/${DOCKER_USR}/${IMAGE_NAME}:${BUILD_NUMBER}
                        docker tag ${IMAGE_NAME}:${BUILD_NUMBER} ${DOCKER_REGISTRY}/${DOCKER_USR}/${IMAGE_NAME}:latest
                        docker push ${DOCKER_REGISTRY}/${DOCKER_USR}/${IMAGE_NAME}:${BUILD_NUMBER}
                        docker push ${DOCKER_REGISTRY}/${DOCKER_USR}/${IMAGE_NAME}:latest
                    """
                }
            }
        }

        stage('Deploy to Kubernetes') {
            when {
                branch 'main'
            }
            steps {
                withCredentials([file(credentialsId: 'KUBECONFIG_CREDENTIALS_ID', variable: 'KUBECONFIG')]) {
                    sh """
                        kubectl apply -f deployment.yml --namespace=${KUBE_NAMESPACE}
                        kubectl set image deployment/wat-website \
                            wat-website=${DOCKER_REGISTRY}/${DOCKER_USER}/${IMAGE_NAME}:${BUILD_NUMBER} \
                            --namespace=${KUBE_NAMESPACE}
                        kubectl rollout status deployment/wat-website --namespace=${KUBE_NAMESPACE} --timeout=120s
                    """
                }
            }
        }

    }

    post {
        always {
            archiveArtifacts artifacts: 'index.html', fingerprint: true
            sh "docker rmi ${IMAGE_NAME}:${BUILD_NUMBER} || true"
        }
        success {
            echo "Build #${BUILD_NUMBER} deployed successfully."
            emailext(
                to: 'worldadvancedtechnilogy23@gmail.com',
                subject: "✅ WAT Website Build #${BUILD_NUMBER} Succeeded",
                body: "Build ${BUILD_NUMBER} on branch ${BRANCH_NAME} deployed successfully.\nBuild URL: ${BUILD_URL}"
            )
        }
        failure {
            echo "Build #${BUILD_NUMBER} failed."
            emailext(
                to: 'worldadvancedtechnilogy23@gmail.com',
                subject: "❌ WAT Website Build #${BUILD_NUMBER} Failed",
                body: "Build ${BUILD_NUMBER} failed. Check logs at: ${BUILD_URL}console"
            )
        }
    }
}

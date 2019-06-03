pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                sh "npm install"
            }
        }
        stage('Run Unit Tests with coverage') {
            steps {
                sh "npm run test:coverage"
            }
        }
        stage('Build application') {
            steps {
            	sh "npm start &"
            }
        }
        stage('Run Functional Tests') {
            steps {
              sauce('SAUCE_ACCESS_KEY_EU') {
                sauceconnect(options: 'local_tunnel', sauceConnectPath: '', useLatestSauceConnect: true) {
                  sh "npm run test.e2e"
                }
              }
            }
        }
    }
}

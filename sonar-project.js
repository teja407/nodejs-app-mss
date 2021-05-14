const sonarqubeScanner = require('sonarqube-scanner');

//http://104.154.90.172:9000/

sonarqubeScanner({
  serverUrl: 'http://104.154.90.172:9000/',
       options : {
	       'sonar.projectKey':'nodejsapp',
	       'sonar.sources':'.',
	       'sonar.login':'5a959c3e5ec67f6c287ccc6edaef9e57ac4b90ac',
	     //  'sonar.host':'http://104.154.90.172:9000',
	    //'sonar.projectDescription': 'This is a Node JS application',
	    //'sonar.projectName': 'Node JS Application - Sample',
	    //'sonar.projectKey':'NodeJsMSS',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'admin',
            //'sonar.projectVersion':'1.0',
	    //'sonar.language':'js',
            //'sonar.sourceEncoding':'UTF-8',
            //'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});

if(process.argv.length==2){
	console.log('USAGE: node search [EXT] [TEXT]');
	process.exit(-1);
}


let args = process.argv.slice(2)
let typeOfFile = args[0]
let searchString = args[1]





const PATH = process.cwd()
const fs = require('fs')
const filesArray = fs.readdirSync(PATH)

 
var found = false;
var c2=0
var count=0
var c=0
var c1=1
filesArray.forEach((file) => {
	
	
	if(file.split('.').pop() == typeOfFile){
		++c2
		 
		
		fs.readFile(file, 'utf8', (err, data) => {
			
		if (err) {
			throw err;
		}
		
		
		if(data.includes(searchString)){
			c=1
			console.log( PATH+'\\'+file ); 
			found=true; 
			
        }
		
		if(c1>c){
		++count}
		
		
		
		if(count==c2){
		console.log('No file was found')}
			
		
		
		
        
		});
		
    }

})


	

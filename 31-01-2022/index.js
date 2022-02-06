var obj = {
    "first_name" : "Brijesh",
    "last_name" : "Yadav",
    "email" : "brijeshrnq2312@gmail.com",
     "roll_no." : "18",
     "students" : [ 
	{
	  "name" : "Brijesh Yadav",
	  "marks" : 50
	},
	{
	  "name" : "Abishek Gupta",
	  "marks" : 90
	},
	{
	  "name" : "Navneet Vishwakarma",
	  "marks" : 63
	},
	{
	  "name" : "ranjeet",
	  "marks" : 71
	},
	{
	  "name" : "Raju",
	  "marks" : 10
	},
	{
	  "name" : "Akriti",
	  "marks" : 37
	},

        ]
}

var ip = prompt("Enter marks to check the list of student who scored equal to or above the given score.100 ")
var ip = parseInt(ip)
var len = obj.students.length

for(var i = 0 ; i<len ; i++){
     var a = obj.students[i]
     var name = a.name
     var marks = a.marks
     if(ip<=marks){
         console.log("Name  : ",name,"\n")
         console.log("Marks : ",marks,"\n")
     }
}  
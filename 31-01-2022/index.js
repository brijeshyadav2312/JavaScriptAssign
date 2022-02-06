var obj = {
    "first_name" : "Brijesh",
    "last_name" : "Yadav",
    "email" : "brijeshrnq2312@gmail.com",
     "roll_no." : "18",
     "students" : [ 
	{
	  "name" : "Brijesh Yadav",
	  "marks" : 61
	},
	{
	  "name" : "Divya Singh",
	  "marks" : 90
	},
	{
	  "name" : "Prakhar",
	  "marks" : 52
	},
	{
	  "name" : "ranjeet",
	  "marks" : 67
	},
	{
	  "name" : "RaviRanjan",
	  "marks" : 37
	},
	{
	  "name" : "AKM Mishra",
	  "marks" : 41
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

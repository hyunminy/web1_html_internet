var members = ["KHM", "KYB", "KSB"];
console.log(members[1]); //KYB
var i = 0;
while (i < members.length) {
  console.log("array loop", members[i]);
  i = i + 1;
}

var roles = {
  programmer: "KHM",
  designer: "KYB",
  manager: "KSB",
};
console.log(roles.designer); //KYB

for (var name in roles) {
  console.log("object => ", name, "value => ", roles[name]);
}

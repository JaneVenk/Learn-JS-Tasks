let user = {
  name: "John",
  go: function() { console.log(this.name) }
}; // поставить ;

(user.go)()
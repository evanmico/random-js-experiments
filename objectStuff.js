const user = {
    name:"Tom",
    title: "cook"
}

const { name, lastName, title } = user; // puts undefined for lastName, but does not throw an error
console.log(name,lastName,title);
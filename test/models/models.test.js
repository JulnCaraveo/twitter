const user = require("./../../app/models/user");

describe("Prueba de unidad",()=>{
    
    test('Revisar el paso de informacion',()=>{
        const User=new user(1,"username","Julian","bio")
        expect(User.id).toBe(1);
        expect(User.username).toBe("username");
        expect(User.name).toBe("Julian");
        expect(User.bio).toBe("bio");
        expect(User.dateCreated).not.toBeUndefined();//Revisando que no este indefinida
        expect(User.lastUpdated).not.toBeUndefined();//Revsando que no este indefinida
    })
    test('Adherir getters',()=>{
        const User=new user(1,"username","Julian","bio")
        expect(User.getUsername).toBe("username")
        expect(User.getBio).toBe("bio")
        expect(User.getDateCreated).not.toBeUndefined()
        expect(User.getLastUpdated).not.toBeUndefined()
    })
    test('Revisar setters',()=>{
        const User=new user(1,"username","Julian","bio")
        User.setUserName="Caraveo"
        expect(User.username).toBe("Caraveo")
        User.setBio="casado"
        expect(User.bio).toBe("casado")
    })
})
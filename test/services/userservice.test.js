const userservice =require('./../../app/services/userservice')

describe("tests for userservice", () =>{
    test("1. create a new user using userservice", ()=>{
        const user= userservice.create(1,"JulianCaraveo","Julian")
        expect(user.username).toBe("JulianCaraveo")
        expect(user.name).toBe("Julian")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test("2. get all user data in a list",()=>{
        const user=userservice.create(1,"JulianCaraveo","Julian")
        const userInfoInList=userservice.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        //expect(userInfoInList[1]).toBe("JulianCaraveo")
        //expect(userInfoInList[2]).toBe("Julian")
        // expect(userInfoInList[3]).toBe("sin bio")
    })
})
import { Employee } from "../lib/Employee";
import { Engineer } from "../lib/Engineer";

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});

test("The engineer should extend the emploiee class", () => {
  const engineer = new Engineer();
  expect(engineer).toBeInstanceOf(Employee)
})

test("On construction, the base class is initialised", () =>{
  
  //arrange 
  const name = "Bob";
  const id = 100;
  const email = "email@gmail.com";

  //act
  const engineer = new Engineer(name, id, email);

  //assert
  expect(engineer.name).toBe(name);
  expect(engineer.id).toBe(id);
  expect(engineer.email).toBe(email);
})
const mitarbeiter = [
    {
        "firstname": "Max",
        "role": "student",
        "hobbies": ["Reading", "Hiking", "Cooking"],
        "department": "public",
        "age": 22
    },
    {
        "firstname": "Sarah",
        "role": "software engineer",
        "hobbies": ["Gaming", "Painting", "Traveling"],
        "department": "retail",
        "age": 28
    },
    {
        "firstname": "John",
        "role": "senior software engineer",
        "hobbies": ["Photography", "Yoga", "Gardening"],
        "department": "sports",
        "age": 35
    },
    {
        "firstname": "Emily",
        "role": "team lead",
        "hobbies": ["Cooking", "Reading", "Dancing"],
        "department": "public",
        "age": 42
    },
    {
        "firstname": "Michael",
        "role": "student",
        "hobbies": ["Programming", "Music", "Sports"],
        "department": "retail",
        "age": 20
    },
    {
        "firstname": "Mia",
        "role": "software engineer",
        "hobbies": ["Traveling", "Hiking", "Photography"],
        "department": "sports",
        "age": 29
    },
    {
        "firstname": "David",
        "role": "senior software engineer",
        "hobbies": ["Gaming", "Painting", "Cooking"],
        "department": "public",
        "age": 38
    },
    {
        "firstname": "Sophia",
        "role": "team lead",
        "hobbies": ["Yoga", "Reading", "Gardening"],
        "department": "retail",
        "age": 45
    },
    {
        "firstname": "Ethan",
        "role": "student",
        "hobbies": ["Dancing", "Cooking", "Traveling"],
        "department": "sports",
        "age": 21
    },
    {
        "firstname": "Olivia",
        "role": "software engineer",
        "hobbies": ["Music", "Programming", "Sports"],
        "department": "public",
        "age": 27
    },
    {
        "firstname": "Liam",
        "role": "senior software engineer",
        "hobbies": ["Hiking", "Photography", "Reading"],
        "department": "retail",
        "age": 35
    },
    {
        "firstname": "Ava",
        "role": "team lead",
        "hobbies": ["Painting", "Cooking", "Gaming"],
        "department": "sports",
        "age": 41
    },
    {
        "firstname": "Noah",
        "role": "student",
        "hobbies": ["Reading", "Yoga", "Gardening"],
        "department": "public",
        "age": 24
    },
    {
        "firstname": "Emma",
        "role": "software engineer",
        "hobbies": ["Cooking", "Dancing", "Traveling"],
        "department": "retail",
        "age": 30
    },
    {
        "firstname": "James",
        "role": "senior software engineer",
        "hobbies": ["Programming", "Music", "Sports"],
        "department": "sports",
        "age": 38
    },
    {
        "firstname": "Isabella",
        "role": "team lead",
        "hobbies": ["Traveling", "Hiking", "Photography"],
        "department": "public",
        "age": 45
    },
    {
        "firstname": "William",
        "role": "student",
        "hobbies": ["Gaming", "Painting", "Cooking"],
        "department": "retail",
        "age": 22
    },
    {
        "firstname": "Charlotte",
        "role": "software engineer",
        "hobbies": ["Yoga", "Reading", "Gardening"],
        "department": "sports",
        "age": 31
    },
    {
        "firstname": "Benjamin",
        "role": "senior software engineer",
        "hobbies": ["Dancing", "Cooking", "Traveling"],
        "department": "public",
        "age": 37
    },
    {
        "firstname": "Amelia",
        "role": "team lead",
        "hobbies": ["Music", "Programming", "Sports"],
        "department": "retail",
        "age": 42
    }
]

//1. Finde alle Mitarbeiter heraus, die älter als 30 Jahre sind.
const findEmployeesOlderThan30 = (mitarbeiter) =>  mitarbeiter.filter((item) => item.age > 30)

//2. Erstelle ein Array, das nur die Vornamen aller Mitarbeiter enthält.
const allFirstnames = (mitarbeiter) =>  mitarbeiter.map((mitarbeiter) => mitarbeiter.firstname)

//3. Berechne das durchschnittliche Alter aller Mitarbeiter.
const calculateAverageAge = (mitarbeiter) => {
    const reducer = (previousValue, currentValue) => previousValue + currentValue.age
    let sum = mitarbeiter.reduce(reducer, 0)
    return sum/mitarbeiter.length
}   

//4. Gib die Namen und Abteilungen aller Mitarbeiter in der Konsole aus.
const getnNamesAndDepartments = (mitarbeiter) => mitarbeiter
    .forEach((item) => console.log(`Name: ${item.firstname}, Abteilung: ${item.department}`))

//5. Sortiere die Mitarbeiter nach ihrem Alter in aufsteigender Reihenfolge.
const sortEmployeesByAge = (mitarbeiter) =>  mitarbeiter.sort((a,b) => a.age - b.age)

//6. Finde den jüngsten Mitarbeiter, der die Rolle "team lead" hat.
const findTheYoungestTemmlead = (mitarbeiter) => {
    const sortedListByAge = sortEmployeesByAge(mitarbeiter)
    return sortedList.find((item) => item.role == "team lead")
}

//7. Überprüfe, ob mindestens ein Mitarbeiter Hobbys hat, die mit "Cooking" beginnen.
const isThereWhoLikesCooking = (mitarbeiter) =>  mitarbeiter.some((item) => item.hobbies[0] === "Cooking")

//8. Überprüfe, ob alle Mitarbeiter älter als 18 Jahre sind.
const areAllOlderThan18 = (mitarbeiter) => mitarbeiter.every((item) => item.age > 18)

//1 console.log(findEmployeesOlderThan30(mitarbeiter))
//2 console.log(allFirstnames(mitarbeiter))
//3 console.log(calculateAverageAge(mitarbeiter))
//4 getnNamesAndDepartments(mitarbeiter)
//5 console.log(sortEmployeesByAge(mitarbeiter))
//6 console.log(findTheYoungestTemmlead(mitarbeiter))
//7 console.log(isThereWhoLikesCooking(mitarbeiter))
//8 console.log(areAllOlderThan18(mitarbeiter))
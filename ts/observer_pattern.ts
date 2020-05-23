/**
 * observable pattern (관찰자 패턴) feat 스타크래프트 옵져버
 *

 */

interface doing {
    subscribe(User): void,
    // unsubscribe(),
    notifyUser(string): void
}

interface User {
    update(string): void
}

class SMS implements doing {
    public user : User[]

    public senText(msg: string) {
        this.notifyUser(msg)
    }

    public notifyUser(msg : string): void {
        this.user.forEach(user => user.update(msg))
    }

    public subscribe(user: User) {
        this.user.push(user)
    }
}

class Summer implements User {
    public update(msg: string): void {
        console.log("Lucia 수신: ", msg);
    }
}

const summer = new Summer()
const sms = new SMS()

sms.subscribe(summer)
sms.senText('hihihihi')


// interface IObserver {
//     sendEmail(): void
// }
//
// class Sale {
//     private observers: IObserver[]
//
//     constructor() {
//         this.observers = []
//     }
//
//     addObserver(ob: IObserver) {
//         this.observers.push(ob)
//     }
//
//     notifyObservers() {
//         console.log('Notifying clients:')
//         this.observers.map((observer) => observer.sendEmail())
//     }
//
// }
//
// class Client implements IObserver {
//     name: string
//     email: string
//
//     constructor(name: string, email: string) {
//         this.name = name
//         this.email = email
//     }
//
//     sendEmail(): void {
//         console.log(`Sending a mail to ${this.name}`)
//         // Code to send a mail for the client, informing there's a sale going on
//     }
//
// }
//
// const blackFriday = new Sale()
//
// // Creates our clients
// const clientA = new Client('John', 'john@email.com')
// const clientB = new Client('Jessica', 'jessica@email.com')
// const clientC = new Client('George', 'george@email.com')
//
// // Add our clients to the observers list
// blackFriday.addObserver(clientA)
// blackFriday.addObserver(clientB)
// blackFriday.addObserver(clientC)
//
// // Notify all of our clients about Black Friday
// blackFriday.notifyObservers()


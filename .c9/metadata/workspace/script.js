{"filter":false,"title":"script.js","tooltip":"/script.js","undoManager":{"mark":28,"position":28,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":11}},"text":"var bob = {"},{"action":"insertText","range":{"start":{"row":0,"column":11},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":48,"column":0}},"lines":["    firstName: \"Bob\",","    lastName: \"Jones\",","    phoneNumber: \"(650) 777-7777\",","    email: \"bob.jones@example.com\"","};","","var mary = {","    firstName: \"Mary\",","    lastName: \"Johnson\",","    phoneNumber: \"(650) 888-8888\",","    email: \"mary.johnson@example.com\"","};","","var contacts = [bob, mary];","","function printPerson(person) {","    console.log(person.firstName + \" \" + person.lastName);","}","","function list() {","\tvar contactsLength = contacts.length;","\tfor (var i = 0; i < contactsLength; i++) {","\t\tprintPerson(contacts[i]);","\t}","}","","/*Create a search function","then call it passing \"Jones\"*/","function search(lastName){","    var contactsLength = contacts.length;","    for (var i = 0; i < contactsLength; i++) {","        if(contacts[i].lastName === lastName){","            printPerson(contacts[i]);","        }","\t}","}","","function add(firstName, lastName, email, phoneNumber){","    contacts[contacts.length] = {","        firstName: firstName,","        lastName: lastName,","        email: email,","        phoneNumber: phoneNumber","    };","}","add(\"Toni-Ann\", \"Fitzgerald\", \"tfit@email.com\", \"(876) 832-2324\");","list();"]},{"action":"insertText","range":{"start":{"row":48,"column":0},"end":{"row":48,"column":1}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":47,"column":0},"end":{"row":47,"column":7}},"text":"list();"},{"action":"removeLines","range":{"start":{"row":46,"column":0},"end":{"row":47,"column":0}},"nl":"\n","lines":["add(\"Toni-Ann\", \"Fitzgerald\", \"tfit@email.com\", \"(876) 832-2324\");"]},{"action":"removeText","range":{"start":{"row":45,"column":1},"end":{"row":46,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":28,"column":0},"end":{"row":28,"column":30}},"text":"then call it passing \"Jones\"*/"},{"action":"removeLines","range":{"start":{"row":26,"column":0},"end":{"row":28,"column":0}},"nl":"\n","lines":["","/*Create a search function"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":42,"column":5},"end":{"row":42,"column":6}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":5},"end":{"row":42,"column":6}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":14,"column":15},"end":{"row":14,"column":26}},"text":"[bob, mary]"},{"action":"insertText","range":{"start":{"row":14,"column":15},"end":{"row":14,"column":16}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":16},"end":{"row":14,"column":17}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":17},"end":{"row":14,"column":18}},"text":"w"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":18},"end":{"row":14,"column":19}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":19},"end":{"row":14,"column":20}},"text":"A"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":20},"end":{"row":14,"column":21}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":21},"end":{"row":14,"column":22}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":14,"column":21},"end":{"row":14,"column":22}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":14,"column":20},"end":{"row":14,"column":21}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":20},"end":{"row":14,"column":21}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":21},"end":{"row":14,"column":22}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":14,"column":19},"end":{"row":14,"column":22}},"text":"Arr"},{"action":"insertText","range":{"start":{"row":14,"column":19},"end":{"row":14,"column":24}},"text":"Array"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":24},"end":{"row":14,"column":26}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":14,"column":15},"end":{"row":14,"column":26}},"text":"new Array()"},{"action":"insertText","range":{"start":{"row":14,"column":15},"end":{"row":14,"column":16}},"text":"["}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":16},"end":{"row":14,"column":17}},"text":"]"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":2}},"text":"};"},{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":12,"column":0}},"nl":"\n","lines":["var bob = {","    firstName: \"Bob\",","    lastName: \"Jones\",","    phoneNumber: \"(650) 777-7777\",","    email: \"bob.jones@example.com\"","};","","var mary = {","    firstName: \"Mary\",","    lastName: \"Johnson\",","    phoneNumber: \"(650) 888-8888\",","    email: \"mary.johnson@example.com\""]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":2,"column":0}},"nl":"\n","lines":["",""]},{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":1}},"text":"\\"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":1}},"text":"\\"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":18},"end":{"row":1,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":0},"end":{"row":2,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":32,"column":0},"end":{"row":32,"column":1}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":32,"column":0},"end":{"row":33,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":0},"end":{"row":33,"column":43}},"text":"function StaffMember(name,discountPercent){"},{"action":"insertText","range":{"start":{"row":33,"column":43},"end":{"row":34,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":34,"column":0},"end":{"row":65,"column":0}},"lines":["    this.name = name;","    this.discountPercent = discountPercent;","}","","var cashRegister = {","    total:0,","    lastTransactionAmount: 0,","    add: function(itemCost){","        this.total += (itemCost || 0);","        this.lastTransactionAmount = itemCost;","    },","    scan: function(item,quantity){","        switch (item){","        case \"eggs\": this.add(0.98 * quantity); break;","        case \"milk\": this.add(1.23 * quantity); break;","        case \"magazine\": this.add(4.99 * quantity); break;","        case \"chocolate\": this.add(0.45 * quantity); break;","        }","        return true;","    },","    voidLastTransaction : function(){","        this.total -= this.lastTransactionAmount;","        this.lastTransactionAmount = 0;","    },","    // Create a new method applyStaffDiscount here","    applyStaffDiscount: function(employee){","        this.total = ((100-employee.discountPercent)/100)*this.total;","    }","    ","};",""]},{"action":"insertText","range":{"start":{"row":65,"column":0},"end":{"row":65,"column":59}},"text":"console.log('Your bill is '+cashRegister.total.toFixed(2));"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":1,"column":0},"end":{"row":3,"column":0}},"nl":"\n","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":17,"column":23},"end":{"row":17,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1413032279971,"hash":"88d542fcb72add71f4aa6723f1503a8f9ab6e8f1"}
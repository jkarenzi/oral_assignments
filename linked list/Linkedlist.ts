class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList<T> {
    private head: ListNode<T> | null;

    constructor() {
        this.head = null;
    }

    add(value: T): void {
        const newNode = new ListNode(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        
        current.next = newNode;
    }

    remove(value: T): boolean {
        if (!this.head) return false;

        if (this.head.value === value) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }

        return false;
    }

    
    find(value: T): ListNode<T> | null {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    display(): string {
        let result = '';
        let current = this.head;
        while (current) {
            result += `${current.value} -> `;
            current = current.next;
        }
        return result + 'null';
    }
}

// Example usage
const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
console.log(list.display()); 

list.remove(2);
console.log(list.display());

const foundNode = list.find(3);
console.log(foundNode ? foundNode.value : 'Not found'); 
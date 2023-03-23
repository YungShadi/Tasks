const reverse = (head) => {
    if (!head || !head.next) {
      return head;
    }
    let temp = reverse(head.next);
    head.next.next = head;
    head.next = undefined;
    return temp;
  }    
  function ListNode(val, next) {
       this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
     }

let addTwoNumbers = function(l1, l2) {
    let sum = 0;
    
    let l1Reversed = reverse(l1)
    let l2Reversed = reverse(l2)
    
    while(l1Reversed){
        let l1ReversedNumber = l1Reversed.val
        sum += l1ReversedNumber
    }
    return sumNeed
};

console.log(addTwoNumbers({
    data: 1,
    next: {
      data: 2,
      next: {
        data: 3,
        next: {
          data: 4,
          next: {
            data: 5,
            next: {
              data: 5,
              next: {
                data: 6
              }
            }
          }
        }
      }
    }
  }));
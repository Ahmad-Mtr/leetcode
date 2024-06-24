struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    struct ListNode* res = malloc(sizeof(struct ListNode));
    res->next = NULL;
    struct ListNode* tmp = res;

    int c = 0;
    int l = 0, r = 0, f =0;
    while (l1 || l2) {
        int x = 0, y = 0;
        if (l1) {
            x = l1->val;
            l1 = l1->next;
        }
        if (l2) {
            y = l2->val;
            l2 = l2->next;
        }
        tmp = tmp->next = (struct ListNode*)malloc(sizeof(struct ListNode));

        tmp->val = c + x + y;
        f = tmp->val;
        c = 0;
        if (tmp->val / 10 > 0) {
            c = tmp->val / 10;
            tmp->val = tmp->val % 10;
        }

        // if (l1 && !l2 && tmp->next == NULL)
        //     //Case 3
        //     if(!f) l = c;
        //     //Case 4
        //     else { l = tmp->val /10;}

        tmp->next = NULL;
    }
    if (f > 9 && c ) {
        // modify L for a new node
        l = c;
    }
    
    if (l) {
        tmp = tmp->next = (struct ListNode*)malloc(sizeof(struct ListNode));
        tmp->val = l;
        tmp->next = NULL;
    }
    /*
    if (r) {
        tmp = tmp->next = (struct ListNode*)malloc(sizeof(struct ListNode));
        tmp->val = r;
        tmp->next = NULL;
    }
    */
    return res->next;
}
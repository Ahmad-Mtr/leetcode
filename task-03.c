/*
This Solution is the C version of the JS one, compare run time of this with the js one and u'll know why C is the Best
*/
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int charExists(char *str, char ch) {
    return strchr(str, ch) != NULL;
}


int lengthOfLongestSubstring(char *s) {
    if (s[0] == '\0') return 0;
    
    int maxLen = 0;
    char subString[1001] = "";
    char str[1001] = "";

    for (int i = 0; s[i] != '\0'; i++) {
        char element = s[i];

        if (!charExists(str, element)) {
            int len = strlen(str);
            str[len] = element;
            str[len + 1] = '\0';

            if (strlen(str) > maxLen) {
                strcpy(subString, str);
                maxLen = strlen(str);
            }
        } else {
            int index = strchr(str, element) - str;
            memmove(str, str + index + 1, strlen(str) - index);
            int len = strlen(str);
            str[len] = element;
            str[len + 1] = '\0';

            if (strlen(str) > maxLen) {
                strcpy(subString, str);
                maxLen = strlen(str);
            }
        }
    }
    
    return maxLen;
}


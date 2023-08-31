def checkPalindrome(str):
    left = 0
    right = len(str) - 1
    while(left < right):
        if(str[left] != str[right]):
            return False
        left += 1
        right -= 1
    return True

def findLongestPalindrome(str):
    pal = ""
    palLen = 0
    for i in range(len(str)):
        for j in range(i, len(str)):
            if str[i] == str[j] and len(str[i:j + 1]) > palLen:
                newPal = str[i: j + 1]
                if checkPalindrome(newPal) == True:
                    pal = newPal
                    palLen = len(pal)
    return pal


print(findLongestPalindrome("babad")) # bab
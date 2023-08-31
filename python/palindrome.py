word = "level"

def checkPalindrome(str):
    left = 0 # points to the first letter
    right = len(str) - 1 # points to the last letter
    while left <= right:
        if str[left] != str[right]:
            return False
        left += 1
        right -= 1
    return True

print(checkPalindrome(word))

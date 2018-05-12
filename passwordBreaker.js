using namespace std;

#include <math>
#include <string>
#include <vector>
#include <picosha2.h>

void join(const vector<string>& v, char c, string& s) { // C++ doesn't have a function to join strings that are indices of vectors as far as I know. 
// I took a function from https://www.safaribooksonline.com/library/view/c-cookbook/0596007612/ch04s09.html to solve this predicament.
   s.clear();

   for (vector<string>::const_iterator p = v.begin();
        p != v.end(); ++p) {
      s += *p;
      if (p != v.end() - 1)
        s += c;
   }
}

int main(){
int characterRange = 26; // a through z
int passwordMaxLength = 4;
int attackRange = math.pow(characterRange, passwordMaxLength);
std::string password = "abcd"; // desired password to crack the hash of
picosha2::hash_hex_str(password, password_hashed);
std::cout << "total bruteforce combos: " + attackRange << endl;
std::cout << "attacking: " + password + " with hash " + password_hashed << endl;

std::vector <int> characterBucket;
	for(int i = 0; i < passwordMaxLength; i++){
		characterBucket[i] = math.pow(characterRange, passwordMaxLength)
	}

std::vector <string> letterMapper;
int mappedNumber;
int basedIndex; 
// mappedString isn't declared here - it's declared below as the third argument of join() detailed above.
// hashed isn't declared here - it will be created automatically when picosha2::hash_hex_str() is ran as the second argument or hash_hex_str()

	for(int i = 0; i <  attackRange; i++){
		mappedNumber = i;
		for(int j = passwordMaxLength - 1; j >= 0; j--){
			basedIndex = math.floor(mappedNumber/characterBucket[j]);
			basedIndex_ASCII = 97 + basedIndex;
			letterMapper[i] = (char) basedIndex_ASCII;
			mappedNumber = mappedNumber%characterBucket[j];
		}
		join(letterMapper, "/", mappedString);
		picosha2::hash_hex_str(mappedString, hashedString);
		std::cout << mappedString + " hashes to: " + hashedString << endl;
		if(password_hashed = hashedString){
			std::cout << "PASSWORD BROKEN: " + mappedString + " Attempt number: " + i << endl;
			break;
		}
	}
}

//const s =
"ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy";
const s = "aacabdkacaa";
/*
const longestPalindrome = (s) => {
    let returnStr = s[0];
    for (let i = 1; i < s.length; i++) {
        for (let j = Math.floor(returnStr.length / 2); j <= i; j++) {
            const leftStr = s.substring(i - j, i + 1);
            const totalStr = s.substring(i - j, i + 1 + j);
            //console.log(`leftStr: ${leftStr}\ttotalStr: ${totalStr}`);
            if (
                leftStr.length > returnStr.length &&
                leftStr === leftStr.split("").toReversed().join("")
            ) {
                returnStr = leftStr;
            } else if (
                totalStr > returnStr.length &&
                totalStr === totalStr.split("").toReversed().join("")
            ) {
                returnStr = totalStr;
            }
        }
    }
    return returnStr;
};
*/
/*
const longestPalindrome = (s) => {
    let returnStr = s[0];
    let lP = 0;
    let rP = 1;
    for (i = 0; i < s.length; i++) {
        lP = i;
        rP = i;
        while (s[lP] === s[rP] && typeof s[lP] !== "undefined") {
            rP++;
            if (rP - lP === 1 && s[lP] === s[rP] && s[lP - 1] !== s[rP]) rP++;
            lP--;
            console.log(rP);
            console.log(lP);
        }
        const tempStr = s.substring(lP + 1, rP + 1);
        if (
            tempStr.length > returnStr.length &&
            tempStr === tempStr.split("").reverse().join("")
        ) {
            returnStr = tempStr;
        } else if (rP - (lP + 1) > returnStr.length) {
            returnStr = tempStr.slice(-1);
        }
        console.log(`lP: ${lP}\trP:${rP}\ttempStr: ${tempStr}`);
    }
    return returnStr;
};
*/
const longestPalindrome = (s) => {
    let returnStr = s[0];
    const s_prime = `#${s.split("").join("#")}#`;
    console.log(s_prime);
    let lP = 0;
    let rP = 1;
    for (i = 0; i < s_prime.length; i++) {
        lP = i;
        rP = i;
        while (
            s_prime[lP] === s_prime[rP] &&
            typeof s_prime[lP] !== "undefined"
        ) {
            rP++;
            lP--;
            console.log(rP);
            console.log(lP);
        }
        const tempStr = s_prime.substring(lP + 1, rP).replaceAll("#", "");
        if (tempStr.length > returnStr.length) {
            returnStr = tempStr;
        }
        console.log(`lP: ${lP}\trP:${rP}\ttempStr: ${tempStr}`);
    }
    return returnStr;
};
console.log(longestPalindrome(s));

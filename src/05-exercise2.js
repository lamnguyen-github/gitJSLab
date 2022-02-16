function sayHello(languageCode) {
    let result = "Hello";
    switch (languageCode) {
        case 'en':
            {
                result = 'Hello'
                break;
            }
        case 'vi':
            {
                result = 'Xin chào'
                break;
            }
        case 'fr':
            {
                result = 'Bonjour'
                break;
            }
        case 'cn':
            {
                result = 'Nǐn hǎo'
                break;
            }
        case 'ja':
            {
                result = 'Konnichiwa'
                break;
            }
        case 'ko':
            {
                result = 'Anyoung haseyo'
                break;
            }
        default:
            return result;
    }
    return result;
}
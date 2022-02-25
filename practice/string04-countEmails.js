import { onCheckSplitChar, onCheckSplitX, onCheckSplitY } from './functionAssign';
const countEmails = (str) => {
    let result = 0;
    let domain = ['.com', '.vn', '.com.vn'];
    let check = false;
    onCheckSplitChar(str, ' ')
        .filter((x) => x.includes('@'))
        .forEach((element) => {
            let assign = onCheckSplitChar(element, '@');
            if (onCheckSplitX(assign).length > 3 && onCheckSplitY(assign).length > 3) {
                check = true;
            }
            domain.forEach((x) => {
                if (
                    check &&
                    onCheckSplitY(assign).includes(x) &&
                    onCheckSplitY(assign).slice(-x.length) === x
                )
                    result++;
            });
            check = false;
        });
    return result;
};

console.log(
    countEmails(
        'ca@sdd.com caaa@sdd.com hello vu lamnguyen@ gmail.com lam@vip.com.ga.sida lamvip@ga.com.vn.haha'
    )
);
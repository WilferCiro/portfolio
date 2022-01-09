export const calculate_age = () => {
    let today = new Date();
    let birthDate = new Date("1998/05/29");
    let age_now = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))  {
        age_now --;
    }
    return age_now;
}
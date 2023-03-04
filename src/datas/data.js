const api = 'api.odcloud.kr/api/15052836/v1/uddi:2253111c-b6f3-45ad-9d66-924fd92dabd7';
const auth = 'R8PD%2FDyE0QDwxkY1%2BEHvAEUOI0jhk1%2F%2F0AZ7ufTi9Btqed6A1jAgvR31wTp5GLn%2FjUtFdhLMdrbAPlTGUqj6bA%3D%3D';
const perPage = 10;
let page = 1;

let array = new Array();

function Datas() {

    return array;
}

const Update = async () =>{

    let url = Url(page++, perPage);

    const res = await fetch(url).then((res) => res.json());

    res.data.forEach(d => {
        array.push(d);
    });
}

function Url(page, perPage){
    return 'https://' + api + '?page=' + page + '&perPage=' + perPage  + '&serviceKey=' + auth;
}

export { Datas, Update };
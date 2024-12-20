
// Pmenu の設定
const pmenuData = [
    ['北海道','東北','関東','中部','近畿','中国','四国','九州'],
    [   ['北海道'],
        ['青森県','岩手県','秋田県','宮城県','山形県','福島県'],
        ['茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県',],
        ['山梨県','長野県','新潟県','富山県','石川県','福井県','静岡県','愛知県','岐阜県','三重県',],
        ['滋賀県','京都府','大阪府','兵庫県','奈良県','和歌山県',],
        ['鳥取県','島根県','岡山県','広島県','山口県',],
        ['香川県','愛媛県','徳島県','高知県',],
        ['福岡県','佐賀県','長崎県','熊本県','大分県','宮崎県','鹿児島県','沖縄県',]
    ]
]

function setPmenu(){
    let divSelect1 = document.getElementById('div_select1')
    pmenuData[0].forEach((v, i) => {
        let tmpOpt = document.createElement('option')
        tmpOpt.setAttribute('id', 'opt1_' + i)
        tmpOpt.setAttribute('value', i)
        tmpOpt.innerText = v
        divSelect1.append(tmpOpt)
    })
    // Change event の追加
    divSelect1.addEventListener('change', changePmenu)
    // 初回だけセレクト2に北海道を設定する
    let divSelect2 = document.getElementById('div_select2')
    divSelect2.append(document.createElement('option'))
    divSelect2.options[0].setAttribute('id', 'opt2_07')
    divSelect2.options[0].setAttribute('value', '0')
    divSelect2.options[0].innerText = pmenuData[1][0]
}

function changePmenu(){
    let divSelect1 = document.getElementById('div_select1')
    var i = divSelect1.selectedIndex
    const optData2 = pmenuData[1][i]
    let divSelect2 = document.getElementById('div_select2')
    divSelect2.innerHTML = ''
    optData2.forEach((v, i) => {
        let tmpOpt = document.createElement('option')
        tmpOpt.setAttribute('id', 'opt2_' + i)
        tmpOpt.setAttribute('value', i)
        tmpOpt.innerText = v
        divSelect2.append(tmpOpt)
    })
}

function setModalText(){
    console.log('show')
    document.getElementById('input_atmodal').setAttribute('value', 'クレヨン')
}
function clearModalText(){
    console.log('close')
    document.getElementById('input_atmodal').setAttribute('value', 'おやすみ')
}
function setModal(){
    let modModal = document.getElementById('mod_modal')
    modModal.addEventListener('shown.bs.modal', setModalText)
    modModal.addEventListener('hidden.bs.modal', clearModalText)
}


function showAlert(){
    alert('しっぽ')
}
function setAlert(){
    let btnAlert = document.getElementById('btn_alert')
    btnAlert.addEventListener('click', showAlert)
}



// 初期画面作成
function init(){
    setPmenu()
    setModal()
    setAlert()
}

init()


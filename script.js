
let container = document.querySelector('div')

let shopName =document.createElement('h2')
container.append(shopName)
shopName.textContent = 'Parduotuve 1'

let shopList = document.createElement('ul')
shopName.after(shopList)

let shopContact = document.createElement('li')
shopList.append(shopContact)
shopContact.innerHTML = (' <span>Phone:</span>  <a href="tel:+3704564644">+3704564644</a>')

let shopMail = document.createElement('li')
shopList.append(shopMail)
shopMail.innerHTML = '<span> Email: </span> <a href="mailto:shop1@parduotuve.lt">shop1@parduotuve.lt</a>'

let shopAdress = document.createElement('li')
shopList.append(shopAdress)
shopAdress.innerHTML = '<span>Address:</span> <a href="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7" target="_blank">Rotušės aikštė 1, Kaunas</a>'

let container2 = document.createElement('div')
container.after(container2)

let shopName2 =document.createElement('h2')
container2.append(shopName2)
shopName2.textContent = 'Parduotuve 2'

let shopList2 = document.createElement('ul')
shopName2.after(shopList2)

let shopContact2 = document.createElement('li')
shopList2.append(shopContact2)
shopContact2.innerHTML = (' <span>Phone:</span>  <a href="tel:+3704564644">+3704564644</a>')

let shopMail2 = document.createElement('li')
shopList2.append(shopMail2)
shopMail2.innerHTML = '<span> Email: </span> <a href="mailto:shop1@parduotuve.lt">shop1@parduotuve.lt</a>'

let shopAdress2 = document.createElement('li')
shopList2.append(shopAdress2)
shopAdress2.innerHTML = '<span>Address:</span> <a href="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7" target="_blank">Rotušės aikštė 1, Kaunas</a>'


let container3 = document.createElement('div')
container2.after(container3)

let shopName3 =document.createElement('h2')
container3.append(shopName3)
shopName3.textContent = 'Parduotuve 3'

let shopList3 = document.createElement('ul')
shopName3.after(shopList3)

let shopContact3 = document.createElement('li')
shopList3.append(shopContact3)
shopContact3.innerHTML = (' <span>Phone:</span>  <a href="tel:+3704564644">+3704564644</a>')

let shopMail3 = document.createElement('li')
shopList3.append(shopMail3)
shopMail3.innerHTML = '<span> Email: </span> <a href="mailto:shop1@parduotuve.lt">shop1@parduotuve.lt</a>'

let shopAdress3 = document.createElement('li')
shopList3.append(shopAdress3)
shopAdress3.innerHTML = '<span>Address:</span> <a href="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7" target="_blank">Rotušės aikštė 1, Kaunas</a>'

let container4 = document.createElement('div')
container3.after(container4)

let shopName4 =document.createElement('h2')
container4.append(shopName4)
shopName4.textContent = 'Parduotuve 4'

let shopList4 = document.createElement('ul')
shopName4.after(shopList4)

let shopContact4 = document.createElement('li')
shopList4.append(shopContact4)
shopContact4.innerHTML = (' <span>Phone:</span>  <a href="tel:+3704564644">+3704564644</a>')

let shopMail4 = document.createElement('li')
shopList4.append(shopMail4)
shopMail4.innerHTML = '<span> Email: </span> <a href="mailto:shop1@parduotuve.lt">shop1@parduotuve.lt</a>'

let shopAdress4 = document.createElement('li')
shopList4.append(shopAdress4)
shopAdress4.innerHTML = '<span>Address:</span> <a href="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7" target="_blank">Rotušės aikštė 1, Kaunas</a>'


let container5 = document.createElement('div')
container4.after(container5)

let iframe = document.createElement('iframe')
container5.append(iframe)
iframe.src = 'https://www.google.com/maps/place/Rotu%C5%A1%C4%97s+a.+1,+44280+Kaunas/@54.8969139,23.887974,17z/data=!3m1!4b1!4m6!3m5!1s0x46e7220ff3184881:0x8002872ac9bbdb7c!8m2!3d54.8969139!4d23.887974!16s%2Fg%2F11c2ckxknk?entry=ttu'
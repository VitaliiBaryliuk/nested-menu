(function game() {
  const menu = [
    {
      title: 'HTML and CSS Week 1',
      items: [
        {
          title: 'Day 1: First meeting',
          link: 'https://github.com/mate-academy/fs-program/blob/master/lesson_00_instructions.md',
        },
        {
          title: 'Day 2: HTML',
          link: 'https://github.com/mate-academy/fs-program/blob/master/html_css/lesson_11.md',
          items: [
            {
              title: 'Algo main: Sum numbers in range',
              link: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range',
            },
            {
              title: 'Algo stretch: Seek and destroy',
              link: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy',
            },
            {
              title: 'Project: Create html form',
              link: 'https://github.com/mate-academy/fe-lesson-1-practice-form/blob/master/README.md',
            },
          ],
        },
      ],
    },
    {
      title: 'HTML and CSS Week 2',
      items: [
        {
          title: 'Day 1: npm, gulp, sass',
          items: [
            {
              title: 'Algo main: Sum numbers in range',
              link: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range',
            },
            {
              title: 'Algo stretch: Seek and destroy',
              link: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy',
            },
            {
              title: 'Project: Create html form',
              link: 'https://github.com/mate-academy/fe-lesson-1-practice-form/blob/master/README.md',
            },
          ],
        },
        {
          title: 'Day 2: BEM',
          link: 'https://github.com/mate-academy/fs-program/blob/master/html_css/lesson_11.md',
          items: [
            {
              title: 'Algo main: Sum numbers in range',
              link: 'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range',
            },
            {
              title: 'Algo stretch: sum all primes',
            },
            {
              title: 'Project: Create html form',
              link: 'https://github.com/mate-academy/fe-lesson-1-practice-form/blob/master/README.md',
            },
          ],
        },
      ],
    },
  ];

  const container = document.querySelector('.container');
  const mainList = document.createElement('ul');
  mainList.classList.add('list', 'no-list');
  container.appendChild(mainList);

  const setAheadOfList = (list) => {
    const listArr = list.childNodes;
    for (let li of listArr) {
      let underLine = document.createElement('hr');
      underLine.classList.add('list__underline');
      li.firstChild.remove();
      li.insertBefore(underLine, li.lastChild);
    }
  };

  const hideList = (event) => {
    if (/drop-image/.test(event.target.className)) {
      if (/hide/.test(event.target.parentElement.lastChild.classList)) {
        event.target.classList.remove('drop-image-rotate');
        event.target.parentElement.lastChild.classList.remove('hide');
      } else {
        event.target.parentElement.lastChild.classList.add('hide');
        event.target.classList.add('drop-image-rotate');
      }
    }
  };

  const createNest = (obj, parentElem) => {
    const menuItem = document.createElement('li');
    const menuList = document.createElement('ul');
    const dropText = document.createElement('span');
    const dropImage = document.createElement('img');

    parentElem.appendChild(menuItem);
    menuItem.appendChild(dropText);
    menuItem.appendChild(menuList);
    menuItem.insertBefore(dropImage, dropText);

    menuItem.classList.add('list__item');

    if (obj.items) {
      dropImage.src = '../images/down.svg';
      dropImage.classList.add('list__drop-image');
      menuList.classList.add('list__no-list');
    } else {
      dropImage.src = '../images/circle.png';
      dropImage.classList.add('list__drop-image', 'list__image-size');
      menuList.classList.add('list__no-list');
    }
    menuItem.classList.add('list__no-list');

    if (obj.link) {
      const menuLink = document.createElement('a');
      dropText.remove();
      menuItem.insertBefore(menuLink, menuList);
      menuLink.innerHTML = obj.title;
      menuLink.href = obj.link;
    } else {
      dropText.innerHTML = obj.title;
    }
    return menuList;
  };

  const renderMenu = () => {
    for (item of menu) {
      const menuItem = createNest(item, mainList);
      item = item.items;
      for (ite of item) {
        const menuSubItem = createNest(ite, menuItem);
        if (ite.items) {
          for (it of ite.items) {
            createNest(it, menuSubItem);
          }
        }
      }
    }
    setAheadOfList(mainList);
  };

  const myMenu = document.querySelector('.list');
  myMenu.addEventListener('click', hideList);
  renderMenu(container);
}());

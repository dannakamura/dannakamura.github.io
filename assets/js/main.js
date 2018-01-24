window.app = (_ => {

    let log = console.log.bind(console),
        messageElement = document.querySelector('.js-typewriter'),
        text = messageElement.innerText.trim();

    let words = text.split(' ');

    let work = [];

    words.forEach(word => {
        let splitWord = word.split('').map((char, index) => {
            return `<i>${char}</i>`;
        }).join('');
        work.push(splitWord);
    });

    let formattedWords = work.map((word, index) => {
        return `<span>${word}</span>`;
    }).join(' ');

    messageElement.innerHTML = formattedWords;
    messageElement.classList.add('animate');

    return {
        replay: (event) => {
            messageElement.classList.remove('animate');
            messageElement.offsetHeight; // force reflow
            setTimeout(_ => {
                messageElement.classList.add('animate');
            });
        }
    };

})();

window.app = (_ => {

    let log = console.log.bind(console),
        messageElement = document.querySelector('.js-typewriter1'),
        text = messageElement.innerText.trim();

    let words = text.split(' ');

    let work = [];

    words.forEach(word => {
        let splitWord = word.split('').map((char, index) => {
            return `<i>${char}</i>`;
        }).join('');
        work.push(splitWord);
    });

    let formattedWords = work.map((word, index) => {
        return `<span>${word}</span>`;
    }).join(' ');

    messageElement.innerHTML = formattedWords;
    messageElement.classList.add('animate');

    return {
        replay: (event) => {
            messageElement.classList.remove('animate');
            messageElement.offsetHeight; // force reflow
            setTimeout(_ => {
                messageElement.classList.add('animate');
            });
        }
    };

})();

window.app = (_ => {

    let log = console.log.bind(console),
        messageElement = document.querySelector('.js-typewriter2'),
        text = messageElement.innerText.trim();

    let words = text.split(' ');

    let work = [];

    words.forEach(word => {
        let splitWord = word.split('').map((char, index) => {
            return `<i>${char}</i>`;
        }).join('');
        work.push(splitWord);
    });

    let formattedWords = work.map((word, index) => {
        return `<span>${word}</span>`;
    }).join(' ');

    messageElement.innerHTML = formattedWords;
    messageElement.classList.add('animate');

    return {
        replay: (event) => {
            messageElement.classList.remove('animate');
            messageElement.offsetHeight; // force reflow
            setTimeout(_ => {
                messageElement.classList.add('animate');
            });
        }
    };

})();

window.app = (_ => {

    let log = console.log.bind(console),
        messageElement = document.querySelector('.js-typewriter3'),
        text = messageElement.innerText.trim();

    let words = text.split(' ');

    let work = [];

    words.forEach(word => {
        let splitWord = word.split('').map((char, index) => {
            return `<i>${char}</i>`;
        }).join('');
        work.push(splitWord);
    });

    let formattedWords = work.map((word, index) => {
        return `<span>${word}</span>`;
    }).join(' ');

    messageElement.innerHTML = formattedWords;
    messageElement.classList.add('animate');

    return {
        replay: (event) => {
            messageElement.classList.remove('animate');
            messageElement.offsetHeight; // force reflow
            setTimeout(_ => {
                messageElement.classList.add('animate');
            });
        }
    };

})();
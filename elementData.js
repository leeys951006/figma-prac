const elementData = {
  root: {
    style: {
      width: '', // Added "this." before widthDecision
      height: '',
      backgroundColor: '',
    },
    children: {
      login: {
        style: {
          width: '',
          height: '',
          backgroundColor: '',
          padding: '10px',
        },
        children: {
          loginInput: {
            style: {
              width: '',
              height: '',
              backgroundColor: '',
            },
            textContent: 'input',
          },
          loginSubmit: {
            style: {
              width: '',
              height: '',
              backgroundColor: '#9AFF92',
            },
            textContent: 'submit',
          },
        },
      },
    },
  },
  defaultStyles: {
    width: 100,
    height: 100,
    backgroundColor: '',
  },
  widthDecision: function (value, callback) {
    return callback(value);
  },
  heightDecision: function (value, callback) {
    return callback(value);
  },
  backgroundColorDecision: function (value, callback) {
    return callback(value);
  },
};

elementData.root.style.width = elementData.widthDecision(elementData.defaultStyles.width, (value) => {
  return value + 'vw';
});

console.log(elementData.root.style.width);

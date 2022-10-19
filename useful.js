/* Useful functions */
const empty = (select) => {
  /* Clearing the select */
  select.replaceChildren(document.createElement('option'));

  /* We refresh fSelect */
  $(`#${select.id}`).fSelect('reload');

  /* The new select is returned */
  return select;
};

const replace = (select, options) => {
  /* We replace its options */
  select.replaceChildren(...options);

  /* We set the value to blank */
  select.value = '';

  /* We refresh fSelect */
  $(`#${select.id}`).fSelect('reload');

  return select;
};

const dateToSQLString = (date) =>
  `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;

const compareDates = (date1, date2) => {
  const string1 = dateToSQLString(date1);
  const string2 = dateToSQLString(date2);

  if (string1 === string2) return 0;

  return date1 < date2 ? -1 : 1;
};

const parseDate = (string, format = 'yyyy-mm-dd') => {
  let parts = string.match(/(\d+)/g),
    i = 0,
    fmt = {};

  // extract date-part indexes from the format
  format.replace(/(yyyy|dd|mm)/g, (part) => {
    fmt[part] = i++;
  });

  return new Date(parts[fmt['yyyy']], parts[fmt['mm']] - 1, parts[fmt['dd']]);
};

const unformatDate = (string, format = 'yyyy-mm-dd') => {
  const date = parseDate(string, format);

  return dateToSQLString(date);
};

function show(object) {
  if (object != null) {
    if (Array.isArray(object)) {
      object.forEach((element) => {
        if (element != null) element.classList.remove('hidden');
      });
    } else {
      object.classList.remove('hidden');
    }
  }
}

function hide(object) {
  if (object != null) {
    if (Array.isArray(object)) {
      object.forEach((element) => {
        if (element != null) element.classList.add('hidden');
      });
    } else {
      object.classList.add('hidden');
    }
  }
}

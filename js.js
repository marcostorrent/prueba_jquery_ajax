var items = [
  {
    title: "title 1",
    text: "text 1",
    count: 0,
    n: 1,
  },
  {
    title: "title 2",
    text: "text 2",
    count: 0,
    n: 2,
  },
  {
    title: "title 3",
    text: "text 3",
    count: 0,
    n: 3,
  },
  {
    title: "title 4",
    text: "text 4",
    count: 0,
    n: 4,
  },
  {
    title: "title 5",
    text: "text 5",
    count: 0,
    n: 5,
  },
  {
    title: "title 6",
    text: "text 6",
    count: 0,
    n: 6,
  },
  {
    title: "title 7",
    text: "text 7",
    count: 0,
    n: 7,
  },
  {
    title: "title 8",
    text: "text 8",
    count: 0,
    n: 8,
  },
  {
    title: "title 9",
    text: "text 9",
    count: 0,
    n: 9,
  },
];

$(document).ready(function () {
  const itemsRand = items.sort(() => 0.5 - Math.random());
  let selected = itemsRand.slice(0, 6);
  $.each(selected, function (i, item) {
    count(item.n);

    $("#itemlist").append(
      `<div class="col">
    <div class="card h-100">
     
      <div class="card-body">
        <h5 class="card-title">` +
        item.title +
        `</h5>
        <p class="card-text">` +
        item.text +
        `</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Mostrado: <span id='count`+item.n+`'>` +
        item.count +
        `</span> veces</small>
      </div>
    </div>
  </div>`
    );
  });
});

function count(n) {
  $.ajax({
    method: "POST",
    url: "contador.php",
    data: { n: n },
  }).done(function (msg) {
    console.log("Item  "+n+": " + msg+" veces");
    $('#count'+n).text(msg);

  });
}

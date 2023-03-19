// Logika resensi
babCerita = $("[bab-cerita]")
isiCerita = $("[isi-cerita]")
bukuContent = $(".buku-content")
const targetCerita = document.querySelectorAll("[target-cerita]")
let targetId = 1;

$.ajax({
    type: 'GET',
    url: 'assets/api/sherlock.json',
    data: { get_param: 'value' },
    dataType: 'json',
    success: function (data) {
        cerita = data.find(x => x.id === targetId);

        $(cerita.isi).each(function (k, v) {
            ceritaIsi = v
        })
        babCerita.html(cerita.bab).animate({ 'opacity': 1 }, 300);
        $i = 0;
        $(cerita.isi).each(function () {
            let increment = $i++
            isiCerita.append("<p class='mb-3 font-light text-gray-200' id='text-cerita-" + increment + "'></p>")
            $("#text-cerita-" + increment).text(cerita.isi[increment])
        })
    }
});

// babCerita.animate({ 'opacity': 0 }, 300, function () {
//                     babCerita.html(cerita.bab).animate({ 'opacity': 1 }, 300);
//                 });
targetCerita.forEach(function (btn) {
    btn.addEventListener("click", function () {
        isiCerita.empty();
        targetId = btn.getAttribute("target-cerita")
        $.ajax({
            type: 'GET',
            url: 'assets/api/sherlock.json',
            data: { get_param: 'value' },
            dataType: 'json',
            success: function (data) {
                cerita = data.find(x => x.id == targetId);
                $(cerita.isi).each(function (k, v) {
                    ceritaIsi = v
                })
                babCerita.animate({ 'opacity': 0 }, 300, function () {
                    babCerita.html(cerita.bab).animate({ 'opacity': 1 }, 300);
                });
                $i = 0;
                quote = cerita.quote;
                quote_by = cerita.quoteBy
                if (quote) {
                    if (!$("#quoteText").length) {
                        $(isiCerita).animate({ 'opacity': 0 }, 300, function () {
                            isiCerita.animate({ 'opacity': 1 }, 300);
                            isiCerita.append("<blockquote class='p-4 my-4 border-l-4 border-gray-500 bg-gray-800' id='quoteText'><p class='text-xl italic font-medium leading-relaxed text-white'>" + quote + "</p><div class='mt-2 flex items-center divide-x-2 divide-gray-700'><cite class='pr-3 font-medium text-gray-400'>" + quote_by + "</cite></div></blockquote>").animate({ 'opacity': 1 }, 300);
                        });
                    } else {

                    }
                } else {
                    $("#quoteText").fadeOut().remove()
                }

                $(cerita.isi).each(function () {
                    let increment = $i++
                    if (!$("#text-cerita-" + increment).length) {
                        isiCerita.append("<p class='mb-4 font-light text-gray-200 content' id='text-cerita-" + increment + "'></p>");

                    }
                    $(isiCerita).animate({ 'opacity': 0 }, 300, function () {
                        isiCerita.animate({ 'opacity': 1 }, 300);
                        $("#text-cerita-" + increment).text(cerita.isi[increment]).animate({ 'opacity': 1 }, 300);
                    });
                })

            }
        });
    })
})

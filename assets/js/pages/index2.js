
$(window).on('scroll', function () {
    $('.card .sparkline').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            $(this).addClass("pullUp");
        }
    });
});
// Morris.Area({
//     element: 'm_area_chart2',
//     data: [{
//             period: '2012',
//             SiteA: 10,
//             SiteB: 0,

//         }, {
//             period: '2013',
//             SiteA: 105,
//             SiteB: 110,

//         }, {
//             period: '2014',
//             SiteA: 78,
//             SiteB: 92,

//         }, {
//             period: '2015',
//             SiteA: 89,
//             SiteB: 185,

//         }, {
//             period: '2016',
//             SiteA: 175,
//             SiteB: 149,

//         }, {
//             period: '2017',
//             SiteA: 126,
//             SiteB: 98,

//         }
//     ],
//     xkey: 'period',
//     ykeys: ['SiteA', 'SiteB'],
//     labels: ['Site A', 'Site B'],
//     pointSize: 0,
//     fillOpacity: 0.4,
//     pointStrokeColors: ['#b6b8bb', '#a890d3'],
//     behaveLikeLine: true,
//     gridLineColor: '#e0e0e0',
//     lineWidth: 0,
//     smooth: false,
//     hideHover: 'auto',
//     lineColors: ['#b6b8bb', '#a890d3'],
//     resize: true

// });
$(function () {
    $(".dial1").knob();
    $({ animatedVal: 0 }).animate({ animatedVal: 66 }, {
        duration: 4000,
        easing: "swing",
        step: function () {
            $(".dial1").val(Math.ceil(this.animatedVal)).trigger("change");
        }
    });
    $(".dial2").knob();
    $({ animatedVal: 0 }).animate({ animatedVal: 26 }, {
        duration: 4500,
        easing: "swing",
        step: function () {
            $(".dial2").val(Math.ceil(this.animatedVal)).trigger("change");
        }
    });
    $(".dial3").knob();
    $({ animatedVal: 0 }).animate({ animatedVal: 76 }, {
        duration: 3800,
        easing: "swing",
        step: function () {
            $(".dial3").val(Math.ceil(this.animatedVal)).trigger("change");
        }
    });
    $(".dial4").knob();
    $({ animatedVal: 0 }).animate({ animatedVal: 88 }, {
        duration: 5200,
        easing: "swing",
        step: function () {
            $(".dial4").val(Math.ceil(this.animatedVal)).trigger("change");
        }
    });


    // Select2 selectbox
    $('.select2').select2();

    $(".search-select").select2({
        allowClear: true
    });

    $("#max-select").select2({
        placeholder: "Select",
        maximumSelectionSize: 2,
    });

    $("#loading-select").select2({
        placeholder: "Select",
        minimumInputLength: 1,
        query: function (query) {
            var data = { results: [] }, i, j, s;
            for (i = 1; i < 5; i++) {
                s = "";
                for (j = 0; j < i; j++) { s = s + query.term; }
                data.results.push({ id: query.term + i, text: s });
            }
            query.callback(data);
        }
    });
    var data = [{ id: 0, tag: 'enhancement' }, { id: 1, tag: 'bug' }, { id: 2, tag: 'duplicate' }, { id: 3, tag: 'invalid' }, { id: 4, tag: 'wontfix' }];
    function format(item) { return item.tag; }

    $("#array-select").select2({
        placeholder: "Select",
        data: { results: data, text: 'tag' },
        formatSelection: format,
        formatResult: format
    });

    //Datetimepicker plugin
    $('.datetimepicker').bootstrapMaterialDatePicker({
        format: 'dddd DD MMMM YYYY - HH:mm',
        clearButton: true,
        weekStart: 1,
    });

    $('.datepicker2').bootstrapMaterialDatePicker({
        format: 'dddd DD MMMM YYYY',
        clearButton: true,
        weekStart: 1,
        time: false
    });

    $('.timepicker').bootstrapMaterialDatePicker({
        format: 'HH:mm',
        clearButton: true,
        date: false
    });
});
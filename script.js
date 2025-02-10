$(document).ready(function () {
    var jsonPath = "";
    var windowLocation = window.location.pathname;

    if (windowLocation === "/genuine-v2/") {
        jsonPath = "./matches.json?v=1.0.1";
    } else if (windowLocation === "/") { 
        jsonPath = "./matches.json?v=1.0.1";
    }else {
        jsonPath = "../matches.json?v=1.0.1";
    }

    $.getJSON(jsonPath, function(data){

    var matchesListDiversity = 
                    '<div class="matches-container col-12 col-md-4">'+
                        '<div class="matches-title roboto-regular">'+data.matches.matchdayOne.matchdayName+'</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayOne.groupOne.matchOne.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayOne.groupOne.matchOne.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayOne.groupOne.matchOne.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayOne.groupOne.matchOne.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayOne.groupOne.matchOne.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayOne.groupOne.matchOne.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayOne.groupOne.matchTwo.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayOne.groupOne.matchTwo.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayOne.groupOne.matchTwo.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayOne.groupOne.matchTwo.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayOne.groupOne.matchTwo.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayOne.groupOne.matchTwo.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayOne.groupOne.matchThree.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayOne.groupOne.matchThree.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayOne.groupOne.matchThree.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayOne.groupOne.matchThree.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayOne.groupOne.matchThree.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayOne.groupOne.matchThree.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="matches-container col-12 col-md-4">'+
                        '<div class="matches-title roboto-regular">'+data.matches.matchdayTwo.matchdayName+'</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayTwo.groupOne.matchOne.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayTwo.groupOne.matchOne.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayTwo.groupOne.matchOne.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayTwo.groupOne.matchOne.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayTwo.groupOne.matchOne.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayTwo.groupOne.matchOne.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayTwo.groupOne.matchTwo.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayTwo.groupOne.matchTwo.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayTwo.groupOne.matchTwo.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayTwo.groupOne.matchTwo.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayTwo.groupOne.matchTwo.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayTwo.groupOne.matchTwo.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayTwo.groupOne.matchThree.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayTwo.groupOne.matchThree.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayTwo.groupOne.matchThree.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayTwo.groupOne.matchThree.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayTwo.groupOne.matchThree.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayTwo.groupOne.matchThree.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="matches-container col-12 col-md-4">'+
                        '<div class="matches-title roboto-regular">'+data.matches.matchdayThree.matchdayName+'</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayThree.groupOne.matchOne.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayThree.groupOne.matchOne.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayThree.groupOne.matchOne.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayThree.groupOne.matchOne.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayThree.groupOne.matchOne.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayThree.groupOne.matchOne.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayThree.groupOne.matchTwo.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayThree.groupOne.matchTwo.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayThree.groupOne.matchTwo.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayThree.groupOne.matchTwo.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayThree.groupOne.matchTwo.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayThree.groupOne.matchTwo.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayThree.groupOne.matchThree.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayThree.groupOne.matchThree.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayThree.groupOne.matchThree.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayThree.groupOne.matchThree.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayThree.groupOne.matchThree.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayThree.groupOne.matchThree.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>';

    var matchesListInclusion = 
                    '<div class="matches-container col-12 col-md-4">'+
                        '<div class="matches-title roboto-regular">'+data.matches.matchdayOne.matchdayName+'</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayOne.groupTwo.matchOne.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayOne.groupTwo.matchOne.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayOne.groupTwo.matchOne.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayOne.groupTwo.matchOne.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayOne.groupTwo.matchOne.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayOne.groupTwo.matchOne.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayOne.groupTwo.matchTwo.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayOne.groupTwo.matchTwo.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayOne.groupTwo.matchTwo.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayOne.groupTwo.matchTwo.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayOne.groupTwo.matchTwo.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayOne.groupTwo.matchTwo.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayOne.groupTwo.matchThree.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayOne.groupTwo.matchThree.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayOne.groupTwo.matchThree.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayOne.groupTwo.matchThree.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayOne.groupTwo.matchThree.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayOne.groupTwo.matchThree.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="matches-container col-12 col-md-4">'+
                        '<div class="matches-title roboto-regular">'+data.matches.matchdayTwo.matchdayName+'</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayTwo.groupTwo.matchOne.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayTwo.groupTwo.matchOne.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayTwo.groupTwo.matchOne.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayTwo.groupTwo.matchOne.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayTwo.groupTwo.matchOne.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayTwo.groupTwo.matchOne.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayTwo.groupTwo.matchTwo.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayTwo.groupTwo.matchTwo.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayTwo.groupTwo.matchTwo.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayTwo.groupTwo.matchTwo.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayTwo.groupTwo.matchTwo.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayTwo.groupTwo.matchTwo.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayTwo.groupTwo.matchThree.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayTwo.groupTwo.matchThree.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayTwo.groupTwo.matchThree.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayTwo.groupTwo.matchThree.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayTwo.groupTwo.matchThree.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayTwo.groupTwo.matchThree.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="matches-container col-12 col-md-4">'+
                        '<div class="matches-title roboto-regular">'+data.matches.matchdayThree.matchdayName+'</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayThree.groupTwo.matchOne.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayThree.groupTwo.matchOne.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayThree.groupTwo.matchOne.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayThree.groupTwo.matchOne.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayThree.groupTwo.matchOne.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayThree.groupTwo.matchOne.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayThree.groupTwo.matchTwo.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayThree.groupTwo.matchTwo.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayThree.groupTwo.matchTwo.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayThree.groupTwo.matchTwo.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayThree.groupTwo.matchTwo.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayThree.groupTwo.matchTwo.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayThree.groupTwo.matchThree.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayThree.groupTwo.matchThree.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayThree.groupTwo.matchThree.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayThree.groupTwo.matchThree.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayThree.groupTwo.matchThree.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayThree.groupTwo.matchThree.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>';

    var matchdayOneMatches = 
                    '<div class="boxscore-inner">'+
                    '<div class="matches-title roboto-bold">'+data.matches.matchdayOne.matchdayName+'</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayOne.groupOne.matchOne.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayOne.groupOne.matchOne.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayOne.groupOne.matchOne.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayOne.groupOne.matchOne.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayOne.groupOne.matchOne.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayOne.groupOne.matchOne.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayOne.groupOne.matchTwo.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayOne.groupOne.matchTwo.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayOne.groupOne.matchTwo.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayOne.groupOne.matchTwo.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayOne.groupOne.matchTwo.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayOne.groupOne.matchTwo.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayOne.groupTwo.matchOne.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayOne.groupTwo.matchOne.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayOne.groupTwo.matchOne.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayOne.groupTwo.matchOne.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayOne.groupTwo.matchOne.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayOne.groupTwo.matchOne.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayOne.groupTwo.matchTwo.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayOne.groupTwo.matchTwo.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayOne.groupTwo.matchTwo.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayOne.groupTwo.matchTwo.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayOne.groupTwo.matchTwo.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayOne.groupTwo.matchTwo.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayOne.groupOne.matchThree.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayOne.groupOne.matchThree.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayOne.groupOne.matchThree.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayOne.groupOne.matchThree.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayOne.groupOne.matchThree.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayOne.groupOne.matchThree.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayOne.groupTwo.matchThree.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayOne.groupTwo.matchThree.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayOne.groupTwo.matchThree.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayOne.groupTwo.matchThree.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayOne.groupTwo.matchThree.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayOne.groupTwo.matchThree.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '</div>'+
                    '</div>';

    var matchdayTwoMatches =
                    '<div class="boxscore-inner">'+
                    '<div class="matches-title roboto-bold">'+data.matches.matchdayTwo.matchdayName+'</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayTwo.groupOne.matchOne.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayTwo.groupOne.matchOne.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayTwo.groupOne.matchOne.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayTwo.groupOne.matchOne.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayTwo.groupOne.matchOne.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayTwo.groupOne.matchOne.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayTwo.groupTwo.matchOne.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayTwo.groupTwo.matchOne.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayTwo.groupTwo.matchOne.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayTwo.groupTwo.matchOne.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayTwo.groupTwo.matchOne.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayTwo.groupTwo.matchOne.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayTwo.groupOne.matchTwo.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayTwo.groupOne.matchTwo.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayTwo.groupOne.matchTwo.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayTwo.groupOne.matchTwo.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayTwo.groupOne.matchTwo.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayTwo.groupOne.matchTwo.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayTwo.groupTwo.matchTwo.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayTwo.groupTwo.matchTwo.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayTwo.groupTwo.matchTwo.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayTwo.groupTwo.matchTwo.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayTwo.groupTwo.matchTwo.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayTwo.groupTwo.matchTwo.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayTwo.groupOne.matchThree.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayTwo.groupOne.matchThree.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayTwo.groupOne.matchThree.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayTwo.groupOne.matchThree.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayTwo.groupOne.matchThree.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayTwo.groupOne.matchThree.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayTwo.groupTwo.matchThree.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayTwo.groupTwo.matchThree.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayTwo.groupTwo.matchThree.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayTwo.groupTwo.matchThree.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayTwo.groupTwo.matchThree.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayTwo.groupTwo.matchThree.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '</div>'+
                    '</div>';

    var matchdayThreeMatches =
                    '<div class="boxscore-inner">'+
                    '<div class="matches-title roboto-bold">'+data.matches.matchdayThree.matchdayName+'</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayThree.groupOne.matchOne.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayThree.groupOne.matchOne.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayThree.groupOne.matchOne.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayThree.groupOne.matchOne.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayThree.groupOne.matchOne.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayThree.groupOne.matchOne.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayThree.groupTwo.matchOne.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayThree.groupTwo.matchOne.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayThree.groupTwo.matchOne.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayThree.groupTwo.matchOne.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayThree.groupTwo.matchOne.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayThree.groupTwo.matchOne.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayThree.groupOne.matchTwo.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayThree.groupOne.matchTwo.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayThree.groupOne.matchTwo.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayThree.groupOne.matchTwo.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayThree.groupOne.matchTwo.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayThree.groupOne.matchTwo.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayThree.groupTwo.matchTwo.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayThree.groupTwo.matchTwo.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayThree.groupTwo.matchTwo.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayThree.groupTwo.matchTwo.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayThree.groupTwo.matchTwo.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayThree.groupTwo.matchTwo.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayThree.groupOne.matchThree.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayThree.groupOne.matchThree.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayThree.groupOne.matchThree.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayThree.groupOne.matchThree.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayThree.groupOne.matchThree.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayThree.groupOne.matchThree.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayThree.groupTwo.matchThree.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayThree.groupTwo.matchThree.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayThree.groupTwo.matchThree.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayThree.groupTwo.matchThree.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayThree.groupTwo.matchThree.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayThree.groupTwo.matchThree.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '</div>'+
                    '</div>';

    var matchdayFourMatches =
                    '<div class="boxscore-inner">'+
                    '<div class="matches-title roboto-bold">'+data.matches.matchdayFour.matchdayName+'</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayFour.groupOne.matchOne.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayFour.groupOne.matchOne.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayFour.groupOne.matchOne.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayFour.groupOne.matchOne.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayFour.groupOne.matchOne.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayFour.groupOne.matchOne.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayFour.groupOne.matchTwo.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayFour.groupOne.matchTwo.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayFour.groupOne.matchTwo.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayFour.groupOne.matchTwo.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayFour.groupOne.matchTwo.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayFour.groupOne.matchTwo.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayFour.groupOne.matchThree.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayFour.groupOne.matchThree.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayFour.groupOne.matchThree.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayFour.groupOne.matchThree.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayFour.groupOne.matchThree.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayFour.groupOne.matchThree.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayFour.groupTwo.matchOne.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayFour.groupTwo.matchOne.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayFour.groupTwo.matchOne.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayFour.groupTwo.matchOne.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayFour.groupTwo.matchOne.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayFour.groupTwo.matchOne.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayFour.groupTwo.matchTwo.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayFour.groupTwo.matchTwo.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayFour.groupTwo.matchTwo.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayFour.groupTwo.matchTwo.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayFour.groupTwo.matchTwo.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayFour.groupTwo.matchTwo.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="container-match">'+
                            '<div class="home-team">'+
                                '<div class="home-img '+data.matches.matchdayFour.groupTwo.matchThree.homeTeamImg+'"></div>'+
                                '<div class="home-name roboto-regular">'+data.matches.matchdayFour.groupTwo.matchThree.homeTeam+'</div>'+
                            '</div>'+
                            '<div class="time-result roboto-bold">'+
                                ''+data.matches.matchdayFour.groupTwo.matchThree.timeResult+''+
                                '<div class="pitch roboto-regular">'+data.matches.matchdayFour.groupTwo.matchThree.pitch+'</div>'+
                            '</div>'+
                            '<div class="away-team">'+
                                '<div class="away-img '+data.matches.matchdayFour.groupTwo.matchThree.awayTeamImg+'"></div>'+
                                '<div class="away-name roboto-regular">'+data.matches.matchdayFour.groupTwo.matchThree.awayTeam+'</div>'+
                            '</div>'+
                        '</div>'+
                        '</div>'+
                    '</div>';

    $(".diversity-row").append(matchesListDiversity);
    $(".inclusion-row").append(matchesListInclusion);
    $(".matchday1").append(matchdayOneMatches);
    $(".matchday2").append(matchdayTwoMatches);
    $(".matchday3").append(matchdayThreeMatches);
    $(".matchdayFinals").append(matchdayFourMatches);

    }).fail(function(){
        console.log("An error has occurred.");
    });

    $("#group-select").on('change', function(e){
        var selected = $("#group-select option:selected").val();

        if (selected == 'diversity') {
            $("#inclusion-group").hide();
            $("#diversity-group").fadeIn();
        } else if (selected == 'inclusion') {
            $("#diversity-group").hide();
            $("#inclusion-group").fadeIn();
        }
    });

    $("#matchday").on('change', function(e) {
        var selected = $("#matchday option:selected").val();

        if (selected === 'gs1') {
            $(".matchday2").hide();
            $(".matchday3").hide();
            $(".matchdayFinals").hide();
            $(".matchday1").fadeIn();
        } else if (selected === 'gs2') {
            $(".matchday1").hide();
            $(".matchday3").hide();
            $(".matchdayFinals").hide();
            $(".matchday2").fadeIn();
        } else if (selected === 'gs3') {
            $(".matchday1").hide();
            $(".matchday2").hide();
            $(".matchdayFinals").hide();
            $(".matchday3").fadeIn();
        } else if (selected === 'finals') {
            $(".matchday1").hide();
            $(".matchday2").hide();
            $(".matchday3").hide();
            $(".matchdayFinals").fadeIn();
        }
    });

    $(".txt-news").on("click", ".myBtn",function() {
        var read =  $(this).text();

        if (read === "Read More") {
            $(this).parent().find("#more").show();
            $(this).parent().find("#dots").hide();
            $(this).text("Read Less");
        } else if (read === "Read Less") {
            $(this).parent().find("#more").hide();
            $(this).parent().find("#dots").show();
            $(this).text("Read More");
        }
    });

    $(".news-feed-txt").on("click", ".myBtn",function() {
        var read =  $(this).text();

        if (read === "Read More") {
            $(this).parent().find("#more").show();
            $(this).parent().find("#dots").hide();
            $(this).text("Read Less");
        } else if (read === "Read Less") {
            $(this).parent().find("#more").hide();
            $(this).parent().find("#dots").show();
            $(this).text("Read More");
        }
    });

    $("#sponsors").on("click", function(){
        $(".collapse").removeClass("show");
    });
    $(".volunteer-main").on("click", function(){
        $(".collapse").removeClass("show");
    });

    $('#contacto-form').submit(function (e) {
        e.preventDefault();

        var nombre = $('#nombre').val();
        var correo = $('#correo').val();
        var mensaje = $('#mensaje').val();

        // Función de validación
        if (!validarCampos(nombre, correo, mensaje)) {
            return;
        }

        // Función de validación para los campos del formulario
        function validarCampos(nombre, correo, mensaje) {
            // Validar campos vacíos
            if (nombre === '') {
                alert('Por favor, completa el nombre');
                return false;
            } else if (correo === '' ) {
                alert('Por favor, completa correo');
                return false;
            } else if (mensaje === '') {
                alert('Por favor, completa mensaje');
                return false;
            }

            // Validar correo electrónico
            if (!validarCorreo(correo)) {
                alert('Por favor, ingresa un correo electrónico válido');
                return false;
            }
            // Validar nombre y mensaje (permitir solo espacios cuando se ingrese texto)
            if (nombre.trim() === '' || mensaje.trim() === '') {
                alert('Los campos no pueden tener espacios antes de ingresar el texto');
                return false;
            }



            return true;
        }

        // Función para validar el formato de correo electrónico
        function validarCorreo(correo) {
            // Expresión regular para validar correo electrónico
            var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return expresion.test(correo);
        }

        // Resto del código de validación y envío del formulario
        // ...

        // Datos del formulario
        var datos = {
            nombre: nombre,
            correo: correo,
            mensaje: mensaje
        };

        // Enviar datos a través de AJAX
        $.ajax({
            type: 'POST',
            url: '../enviar_correo.php',
            data: datos,
            success: function (response) {
                alert(response);
                $('#contacto-form')[0].reset();
            },
            error: function () {
                alert('Hubo un error al enviar el correo');
            }
        });
    });

    Fancybox.bind(".gallery-item", {
        hideScrollbar: false,
        groupAll: true
    });
});
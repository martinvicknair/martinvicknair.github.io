jQuery(document).ready(function($) {

    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    GitHubCalendar("#github-graph", "martinvicknair");

    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "martinvicknair", selector: "#ghfeed" });

});

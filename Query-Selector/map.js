function closeRows(openFunc) {
    if ($('#queryRowDb').is(":visible")) {
        closeAppDb(openFunc);
    }
    else if ($('#queryRowWs').is(":visible")) {
        closeAppWs(openFunc);
    }
    else if ($('#queryRowFtp').is(":visible")) {
        closeAppFtp(openFunc);
    }
    else if ($('#queryRowSharedFolder').is(":visible")) {
        closeAppSharedFolder(openFunc);
    }
    else if ($('#queryRowDistCache').is(":visible")) {
        closeAppDistCache(openFunc);
    }
    else if ($('#queryRowQueue').is(":visible")) {
        closeAppQueue(openFunc);
    }
    else if ($('#queryRowTask').is(":visible")) {
        closeTask(openFunc);
    }
    else if ($('#queryRowApp').is(":visible")) {
        closeApp(openFunc);
    }
    else if ($('#queryRowSb').is(":visible")) {
        closeSb(openFunc);
    }
    else if ($('#queryRowAdvPhy').is(":visible")) {
        closeAdvPhy(openFunc);
    }
    else if ($('#queryRowSlnAssemblies').is(":visible")) {
        closeSlnAssemblies(openFunc);
    }
    else if ($('#queryRowRefsToAssembly').is(":visible")) {
        closeRefsToAssembly(openFunc);
    }
    else if ($('#queryRowRefCountsToAssembly').is(":visible")) {
        closeRefCountsToAssembly(openFunc);
    }
    else if ($('#queryRowAdvAss').is(":visible")) {
        closeAdvAss(openFunc);
    }
    else {
        openFunc();
    }

};

function closeAppDb(openFunc) {
    $("#queryRowDb").slideUp(400, function() {
        $("#queryRowContainerHeaderDb").empty();

        $("#whereAppPanelPlaceholderDb").contents().appendTo('#whereAppPanel');
        $("#queryRowContainerContentDb").contents().appendTo('#appDbQueryContainer');

        openFunc();
    });
};

function closeAppWs(openFunc) {
    $("#queryRowWs").slideUp(400, function() {
        $("#queryRowContainerHeaderWs").empty();

        $("#whereAppPanelPlaceholderWs").contents().appendTo('#whereAppPanel');
        $("#queryRowContainerContentWs").contents().appendTo('#appWsQueryContainer');

        openFunc();
    });
};

function closeAppFtp(openFunc) {
    $("#queryRowFtp").slideUp(400, function() {
        $("#queryRowContainerHeaderFtp").empty();

        $("#whereAppPanelPlaceholderFtp").contents().appendTo('#whereAppPanel');
        $("#queryRowContainerContentFtp").contents().appendTo('#appFtpQueryContainer');

        openFunc();
    });
};

function closeAppSharedFolder(openFunc) {
    $("#queryRowSharedFolder").slideUp(400, function() {
        $("#queryRowContainerHeaderSharedFolder").empty();

        $("#whereAppPanelPlaceholderSharedFolder").contents().appendTo('#whereAppPanel');
        $("#queryRowContainerContentSharedFolder").contents().appendTo('#appSharedFolderQueryContainer');

        openFunc();
    });
};

function closeAppDistCache(openFunc) {
    $("#queryRowDistCache").slideUp(400, function() {
        $("#queryRowContainerHeaderDistCache").empty();

        $("#whereAppPanelPlaceholderDistCache").contents().appendTo('#whereAppPanel');
        $("#queryRowContainerContentDistCache").contents().appendTo('#appDistCacheQueryContainer');

        openFunc();
    });
};

function closeAppQueue(openFunc) {
    $("#queryRowQueue").slideUp(400, function() {
        $("#queryRowContainerHeaderQueue").empty();

        $("#whereAppPanelPlaceholderQueue").contents().appendTo('#whereAppPanel');
        $("#queryRowContainerContentQueue").contents().appendTo('#appQueueQueryContainer');

        openFunc();
    });
};

function closeTask(openFunc) {
    $("#queryRowTask").slideUp(400, function() {
        $("#queryRowContainerHeaderTask").empty();
        $("#queryRowContainerContentTask").contents().appendTo('#taskQueryContainer');

        openFunc();
    });
};

function closeApp(openFunc) {
    $("#queryRowApp").slideUp(400, function() {
        $("#queryRowContainerHeaderApp").empty();
        $("#queryRowContainerContentApp").contents().appendTo('#appQueryContainer');

        openFunc();
    });
};

function closeSb(openFunc) {
    $("#queryRowSb").slideUp(400, function() {
        $("#queryRowContainerHeaderSb").empty();
        $("#queryRowContainerContentSb").contents().appendTo('#sbQueryContainer');

        openFunc();
    });
};

function closeAdvPhy(openFunc) {
    $("#queryRowAdvPhy").slideUp(400, function() {
        $("#queryRowContainerHeaderAdvPhy").empty();
        $("#queryRowContainerContentAdvPhy").contents().appendTo('#advPhyQueryContainer');

        openFunc();
    });
};

function closeSlnAssemblies(openFunc) {
    $("#queryRowSlnAssemblies").slideUp(400, function() {
        $("#queryRowContainerHeaderSlnAssemblies").empty();
        $("#queryRowContainerContentSlnAssemblies").contents().appendTo('#slnAssembliesQueryContainer');

        openFunc();
    });
};

function closeRefsToAssembly(openFunc) {
    $("#queryRowRefsToAssembly").slideUp(400, function() {
        $("#queryRowContainerHeaderRefsToAssembly").empty();
        $("#queryRowContainerContentRefsToAssembly").contents().appendTo('#refsToAssemblyQueryContainer');

        openFunc();
    });
};

function closeRefCountsToAssembly(openFunc) {
    $("#queryRowRefCountsToAssembly").slideUp(400, function() {
        $("#queryRowContainerHeaderRefCountsToAssembly").empty();
        $("#queryRowContainerContentRefCountsToAssembly").contents().appendTo('#refCountsToAssemblyQueryContainer');

        openFunc();
    });
};

function closeAdvAss(openFunc) {
    $("#queryRowAdvAss").slideUp(400, function () {
        $("#queryRowContainerHeaderAdvAss").empty();
        $("#queryRowContainerContentAdvAss").contents().appendTo('#advAssQueryContainer');

        openFunc();
    });
};

function openAppDb() {
    $("#queryRowContainerHeaderDb").append("<h3>Application -- Database</h3>")
    $("#appDbQueryContainer").contents().appendTo('#queryRowContainerContentDb');
    $("#whereAppPanel").contents().appendTo('#whereAppPanelPlaceholderDb');
    $("span.app-label").html("Database");

    $("#queryRowDb").slideDown();
};

function openAppWs() {
    $("#queryRowContainerHeaderWs").append("<h3>Application -- Web Service</h3>")
    $("#queryRowContainerHeaderWs").append("<p>Web Services data is extracted from the global.config, app.configs and code stored in TFS. The only searchable urls are those stored in configurations files. If no url matches the web service you are looking for then search by Name. Name is multi-field value, it can contain urls, configuration key values or web service file names (which one depends on where the web service was discovered)</p>")
    $("#appWsQueryContainer").contents().appendTo('#queryRowContainerContentWs');
    $("#whereAppPanel").contents().appendTo('#whereAppPanelPlaceholderWs');
    $("span.app-label").html("WebService");


    $("#queryRowWs").slideDown();
};

function openAppFtp() {
    $("#queryRowContainerHeaderFtp").append("<h3>Application -- Ftp</h3>")
    $("#appFtpQueryContainer").contents().appendTo('#queryRowContainerContentFtp');
    $("#whereAppPanel").contents().appendTo('#whereAppPanelPlaceholderFtp');
    $("span.app-label").html("Ftp");

    $("#queryRowFtp").slideDown();
};

function openAppSharedFolder() {
    $("#queryRowContainerHeaderSharedFolder").append("<h3>Application -- Shared Folder</h3>")
    $("#appSharedFolderQueryContainer").contents().appendTo('#queryRowContainerContentSharedFolder');
    $("#whereAppPanel").contents().appendTo('#whereAppPanelPlaceholderSharedFolder');
    $("span.app-label").html("SharedFolder");

    $("#queryRowSharedFolder").slideDown();
};

function openAppDistCache() {
    $("#queryRowContainerHeaderDistCache").append("<h3>Application -- Distributed Cache</h3>")
    $("#appDistCacheQueryContainer").contents().appendTo('#queryRowContainerContentDistCache');
    $("#whereAppPanel").contents().appendTo('#whereAppPanelPlaceholderDistCache');
    $("span.app-label").html("DistributedCache");

    $("#queryRowDistCache").slideDown();
};

function openAppQueue() {
    $("#queryRowContainerHeaderQueue").append("<h3>Application -- Queue</h3>")
    $("#appQueueQueryContainer").contents().appendTo('#queryRowContainerContentQueue');
    $("#whereAppPanel").contents().appendTo('#whereAppPanelPlaceholderQueue');
    $("span.app-label").html("Queue");

    $("#queryRowQueue").slideDown();
};

function openTask() {
    $("#queryRowContainerHeaderTask").append("<h3>Scheduled Task</h3><h4>Optionally with Web Services and Applications</h3>")
    $("#taskQueryContainer").contents().appendTo('#queryRowContainerContentTask');

    $("#queryRowTask").slideDown();
};

function openApp() {
    $("#queryRowContainerHeaderApp").append("<h3>Applications -- All Resources</h3>")
    $("#appQueryContainer").contents().appendTo('#queryRowContainerContentApp');

    $("#queryRowApp").slideDown();
};

function openSb() {
    $("#queryRowContainerHeaderSb").append("<h3>Service Bus</h3><h4>Messages, Publishers, Subscribers</h4>")
    $("#sbQueryContainer").contents().appendTo('#queryRowContainerContentSb');

    $("#queryRowSb").slideDown();
};

function openAdvPhy() {
    $("#queryRowContainerHeaderAdvPhy").append("<h3>Advanced Cypher Queries</h3><h4>Physical Data Model</h4>")
    $("#advPhyQueryContainer").contents().appendTo('#queryRowContainerContentAdvPhy');

    $("#queryRowAdvPhy").slideDown();
};

function openSlnAssemblies() {
    $("#queryRowContainerHeaderSlnAssemblies").append("<h3>Solution Assemblies</h3>")
    $("#slnAssembliesQueryContainer").contents().appendTo('#queryRowContainerContentSlnAssemblies');

    $("#queryRowSlnAssemblies").slideDown();
};

function openRefsToAssembly() {
    $("#queryRowContainerHeaderRefsToAssembly").append("<h3>References to Assembly</h3><p>Note: csproj files do not always specify the version number of non Vueling assemblies</p>")
    $("#refsToAssemblyQueryContainer").contents().appendTo('#queryRowContainerContentRefsToAssembly');

    $("#queryRowRefsToAssembly").slideDown();
};

function openRefCountsToAssembly() {
    $("#queryRowContainerHeaderRefCountsToAssembly").append("<h3>Reference Statistics</h3><p>Note: csproj files do not always specify the version number of non Vueling assemblies</p>")
    $("#refCountsToAssemblyQueryContainer").contents().appendTo('#queryRowContainerContentRefCountsToAssembly');

    $("#queryRowRefCountsToAssembly").slideDown();
};

function openAdvAss() {
    $("#queryRowContainerHeaderAdvAss").append("<h3>Advanced Assembly Queries</h3><h4>Governance</h4>")
    $("#advAssQueryContainer").contents().appendTo('#queryRowContainerContentAdvAss');

    $("#queryRowAdvAss").slideDown();
};

function noOpen() {

}



function loadMapScenario() {
                Microsoft.Maps.loadModule('Microsoft.Maps.AutoSuggest', {
                    callback: onLoad,
                    errorCallback: onError
                });
                function onLoad() {

                    var options = { maxResults: 5 };

                    var manager = new Microsoft.Maps.AutosuggestManager(options);
                    manager.attachAutosuggest('#add_start', '#add_start_box', selectedSuggestion);

                    var end = new Microsoft.Maps.AutosuggestManager(options);
                    end.attachAutosuggest('#add_end', '#add_end_box', selectedSuggestion_end);
                }

                function onError(message) {
                    document.getElementById('printoutPanel').innerHTML = message;
                }

                function selectedSuggestion(suggestionResult) {
                    document.getElementById('add_start').innerHTML = suggestionResult.formattedSuggestion 
                }

                function selectedSuggestion_end(suggestionResult_end) {
                    document.getElementById('add_end').innerHTML = suggestionResult_end.formattedSuggestion 
                }
                
            }




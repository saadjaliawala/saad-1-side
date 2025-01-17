 var headers = ["Book", "Author", "Language", "Published", "Sales"];
       var data = [
                    ["The Lord of the Rings", "J. R. R. Tolkien","English", "1954–1955", "150 million"],
                    ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry","French", "1943", "140 million"],
                    ["Harry Potter and the Philosopher's Stone", "J. K. Rowling","English", "1997", "107 million"],
                    ["And Then There Were None", "Agatha Christie","English", "1939", "100 million"],
                    ["Dream of the Red Chamber", "Cao Xueqin","Chinese", "1754–1791", "100 million"],
                    
                    ["The Hobbit", "J. R. R. Tolkien","English", "1937", "100 million"],
                    ["She: A History of Adventure", "H. Rider Haggard", "English", "1887", "100 million"],
       ];

       
       var Excel = React.createClass({
            displayName: 'Excel',
            getInitialState: function(){
           return {
                data:this.props.initialData,
                sortby:null,
                descending:false,
                edit:null,
                 };
         },
         propTypes: {
             headers: React.PropTypes.arrayOf(
                React.PropTypes.string
              ),
              initialData: React.PropTypes.arrayOf(
                   React.PropTypes.arrayOf(
                      React.PropTypes.string
                )
              ),
            },
            _showEditor: function(e) {
                this.setState({edit: {
                row: parseInt(e.target.dataset.row, 10),
                cell: e.target.cellIndex,
                }});
                
             },
            _save: function(e) {
                e.preventDefault();
                var input = e.target.firstChild;
                var data = this.state.data.slice();
                data[this.state.edit.row][this.state.edit.cell] = input.value;
                  this.setState({
                edit: null, // done editing
                data: data,
                });

                },
            _shot: function(e){
                var column = e.target.cellIndex;
                var data = this.state.data.slice();
                var descending = this.state.sortby === column && !this.state.descending;
                data.sort(function(a, b) {
                   return descending
                    ? (a[column] < b[column] ? 1 : -1)
                    : (a[column] > b[column] ? 1 : -1);
                });
                 this.setState({
                  data: data,
                  sortby: column,
                  descending: descending,
                });
            },
           render: function(){
               return(
                   React.DOM.table(null,
                     React.DOM.thead({onClick: this._shot},
                       React.DOM.tr(null,
                         this.props.headers.map(function(title , idx) {
                           if (this.state.sortby === idx) {
                             title += this.state.descending ? ' \u2191' : ' \u2193'
                              }
                          return React.DOM.th({key: idx}, title);
                         },this)
                        )
                     ),
                       React.DOM.tbody({onDoubleClick: this._showEditor},
                         this.state.data.map(function(row , rowidx) {
                          return (
                           React.DOM.tr({key: rowidx},
                              row.map(function(cell, idx) {
                                  var content = cell;
                                  
                                  content = React.DOM.form({onSubmit: this._save},
                                        React.DOM.input({
                                        type: 'text',
                                        defaultValue: content,
                                    })
                                    );
                                return React.DOM.td({
                                    key: idx,
                                    'data-row': rowidx,
                                }, content);
                            },this)
                          )
                         );
                      },this)
                  )   
                )
               );
           }
       });
       
       ReactDOM.render(
           React.createElement(Excel ,{
               headers: headers,
               initialData: data,
           }),
           document.getElementById('app')
       );
       
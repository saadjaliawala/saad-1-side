
var questions = [
    ["who is your prime minister ?",'imran' ,'nawaz','molana','B'],
    ['who is your enemy','america','dubai','israel','C'],
    ["who is your prime minister ?",'imran' ,'nawaz','molana','A'],
    ['who is your enemy','america','dubai','israel','C'],
    ["who is your prime minister ?",'imran' ,'nawaz','molana','A'],

] ;

var  position = 0, correct = 0 , choice ,percentage;

var render = React.createClass({

    getInitialState: function(){
            return{
                correct: this.props.correct,
                position: this.props.position,
                quesion: this.props.data[position][0],
             opt1: this.props.data[position][1],
             opt2: this.props.data[position][2],
             opt3: this.props.data[position][3],
             ans: this.props.data[position][4],
            }
    },
    

})



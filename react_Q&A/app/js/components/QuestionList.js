var React=require('react');
var QuestionItem=require('./QuestionItem.js');

module.exports=React.createClass({
	render:function(){
		var _questions=this.props.questions;
		var _onVote=this.props.onVote;
		if(!Array.isArray(_questions)){
			throw new Error('this.props.questions must be an array !');
		}
		var questionsComps=_questions.map(function(qst){
			return <QuestionItem key={qst.key} questionKey={qst.key} title={qst.title} desc={qst.desc} voteCount={qst.voteCount} onVote={_onVote} />
		});

		return(
			<div id="questions" className="">
			  	{ questionsComps }
			</div>
		);
	}
});
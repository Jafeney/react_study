var React=require('react');

module.exports=React.createClass({
	handleSubmit:function(e){
		e.preventDefault();
		var newQuestion={
			title:this.refs.title.value,
			desc:this.refs.desc.value,
			voteCount:0
		};
		if(!newQuestion.title){
			return false;
		}
		this.refs.addQuestionForm.reset();
		this.props.onNewQuestion(newQuestion);
	},
	render:function(){
		var styleObj={
			display:this.props.formDisplayed?'block':'none'
		}
		return (
			<form ref="addQuestionForm" style={styleObj} onSubmit={this.handleSubmit} name="addQuestion" className="clearfix">
			  	<div className="form-group">
			    		<label htmlFor="qtitle">问题</label>
			    		<input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" />
			  	</div>
			  	<textarea ref="desc" className="form-control" rows="3" placeholder="问题的描述"></textarea>
			  	<button className="btn btn-success pull-right">确认</button>
			  	<button onClick={this.props.onToggleForm} className="btn btn-default pull-right">取消</button>
			</form>
		);
	}
});
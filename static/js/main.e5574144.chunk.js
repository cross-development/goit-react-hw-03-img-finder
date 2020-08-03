(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{14:function(e,t,a){e.exports={button:"Button_button__1pYIY"}},15:function(e,t,a){e.exports={list:"ImageGallery_list__2f8mu"}},16:function(e,t,a){e.exports={errorWrapper:"Notification_errorWrapper__2tvtu"}},18:function(e,t,a){e.exports=a(47)},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),l=a(10),s=a(2),i=a(3),u=a(5),m=a(4),h=a(13),p=a.n(h),g={margin:"0 47%",height:"80",width:"80"},d=function(){return r.a.createElement(p.a,{type:"ThreeDots",color:"#0984e3",style:g})},f=a(14),b=a.n(f),v=function(e){var t=e.label,a=e.onLoad;return r.a.createElement("button",{type:"submit",className:b.a.button,onClick:a},t)};v.defaultProps={label:"Search"};var y=v,_=a(6),w=a.n(_),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleChange=function(t){var a=t.target.value;e.setState({inputValue:a})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.inputValue;e.props.onSubmit(a),e.setState({inputValue:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.inputValue;return r.a.createElement("header",{className:w.a.searchbar},r.a.createElement("form",{className:w.a.searchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:w.a.button},r.a.createElement("span",{className:w.a.buttonLabel},"Search")),r.a.createElement("input",{className:w.a.input,autoFocus:!0,type:"text",autoComplete:"off",placeholder:"Search images and photos",value:e,onChange:this.handleChange})))}}]),a}(n.Component),S=a(7),j=a.n(S),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleCloseModal=function(t){"Escape"!==t.code&&"DIV"!==t.target.nodeName||e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleCloseModal),window.addEventListener("click",this.handleCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleCloseModal),window.removeEventListener("click",this.handleCloseModal)}},{key:"render",value:function(){var e=this.props,t=e.image,a=e.alt;return r.a.createElement("div",{className:j.a.overlay},r.a.createElement("div",{className:j.a.modal},r.a.createElement("img",{src:t,alt:a})))}}]),a}(n.Component);C.defaultProps={alt:"photo from Pixabay"};var I=a(8),O=a.n(I),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e.toggleModal=function(){return e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.webFormat,a=e.tags,n=e.largeImage,o=this.state.showModal;return r.a.createElement("li",{className:O.a.item},r.a.createElement("img",{src:t,alt:a,className:O.a.itemImage,onClick:this.toggleModal}),o&&r.a.createElement(C,{image:n,alt:a,onClose:this.toggleModal}))}}]),a}(n.Component);k.defaultProps={tags:"Photo from Pixabay"};var M=a(15),x=a.n(M),N=function(e){var t=e.images;return r.a.createElement("ul",{className:x.a.list},t.map((function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL,o=e.tags;return r.a.createElement(k,{key:t,webFormat:a,largeImage:n,tags:o})})))},L=a(16),F=a.n(L),Q=function(e){var t=e.message;return r.a.createElement("div",{className:F.a.errorWrapper},r.a.createElement("p",null,"`Woops, something went wrong $",t,"`"))},P=a(9),V=a.n(P),B=a(17),D="16822291-3bd987bc1a9b2ff27c6ed5ac6",W="https://pixabay.com/api",A={fetchImagesByQuery:function(){var e=Object(B.a)(V.a.mark((function e(t){var a,n,r,o=arguments;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:1,e.prev=1,e.next=4,fetch("".concat(W,"/?q=").concat(t,"&page=").concat(a,"&key=").concat(D,"&image_type=photo&orientation=horizontal&per_page=12"));case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r.hits);case 11:throw e.prev=11,e.t0=e.catch(1),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()},G=(a(45),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],loading:!1,error:null,searchQuery:"",page:1},e.fetchImages=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState({loading:!0}),A.fetchImagesByQuery(a,n).then((function(t){return e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.handleFormSubmit=function(t){e.setState({searchQuery:t,page:1,images:[]})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages(),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.error,n=e.images;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{onSubmit:this.handleFormSubmit}),a&&r.a.createElement(Q,{message:a.message}),n.length>0&&r.a.createElement(N,{images:n}),t&&r.a.createElement(d,null),n.length>0&&!t&&r.a.createElement(y,{label:"Load more",onLoad:this.fetchImages}))}}]),a}(n.Component));a(46);c.a.render(r.a.createElement(G,null),document.getElementById("root"))},6:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__8g2b7",searchForm:"Searchbar_searchForm__2scG4",button:"Searchbar_button__xaKnX",buttonLabel:"Searchbar_buttonLabel__3mgRv",input:"Searchbar_input__2dbQ3"}},7:function(e,t,a){e.exports={overlay:"Modal_overlay__3lPBM",modal:"Modal_modal__2JCwM"}},8:function(e,t,a){e.exports={item:"ImageGalleryItem_item__1MCF5",itemImage:"ImageGalleryItem_itemImage__3mwb4"}}},[[18,1,2]]]);
//# sourceMappingURL=main.e5574144.chunk.js.map
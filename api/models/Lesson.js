/**
 * Created by TuanAnh on 10/8/2017.
 */
module.exports = {

  attributes: {
    id:{
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    lessonCategoryId:{
      model:'lessonCategory'
    },

    question:{
      collection: 'question',
      via:'lessonId'
    },

    name:{
      type: 'string',
      size: 256
    },
    linkVideo:{
      type:'text'
    },
    typeVideo:{
      type: 'string',
      size: 256,
      enum: ['youtube','drive','direct'],
    },
    content:{
      type: 'text'
    },
    order:{
      type: 'integer'
    }
  },
  afterDestroy: function(destroyedRecords, cb) {
    function dequy(list, i){
      if(i >= list.length){
        return cb();
      }
      Question.destroy({
        lessonId: list[i].id
      }).exec(function(err){
        dequy(list, ++i);
      });
    }
    dequy(destroyedRecords,0);
  }
};

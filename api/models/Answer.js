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
    questionId:{
      model:'question'
    },



    content:{
      type: 'string',
      size: 256
    },
    isTrue:{
      type: 'boolean'
    }
  }
};

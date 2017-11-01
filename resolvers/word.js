import formatErrors from '../formatErrors';

export default {
  Mutation: {
    createWord: async (parent, args, { models, user }) => {
      try {
        await models.Word.create({ ...args, owner: user.id });
        return {
          ok: true,
        };
      } catch (err) {
        console.log('word err: ', err);
        return {
          ok: false,
          errors: formatErrors(err, models),
        };
      }
    },
  },
};
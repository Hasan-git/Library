import { CommentView } from './../../../../blocks/interface/commentView';
import { UserView } from './../../../../blocks/interface/userView';
import { PostView } from './../../../../blocks/interface/postView';

export const users: UserView[] = [
  {
    id: "1",
    name: 'أحمد جابر',
    imageSrc: "friend-harmonic1.jpg"
  },
  {
    id: "2",
    name: 'راجي حمود',
    imageSrc: "friend-harmonic2.jpg"
  },
  {
    id: "3",
    name: 'جورج ضاهر',
    imageSrc: "friend-harmonic3.jpg"
  },
  {
    id: "4",
    name: 'يحيا عبد السلام',
    imageSrc: "friend-harmonic4.jpg"
  },
  {
    id: "5",
    name: 'فريد شوقي',
    imageSrc: "friend-harmonic5.jpg"
  },
  {
    id: "6",
    name: 'واليد حلمي',
    imageSrc: "friend-harmonic6.jpg"
  },
  {
    id: "7",
    name: 'سامر خضرة',
    imageSrc: "friend-harmonic7.jpg"
  },
  {
    id: "8",
    name: 'جمال حسن',
    imageSrc: "friend-harmonic8.jpg"
  },
  {
    id: "9",
    name: 'ساره محمد',
    imageSrc: "friend-harmonic9.jpg"
  },
  {
    id: "10",
    name: 'دلال المصري',
    imageSrc: "friend-harmonic10.jpg"
  }
]

export const comments: CommentView[] = [
  {
    id: "1",
    likesCount: 2,
    createdAt: "2017-03-24T18:18",
    user: users[9],
    content: "إليكم الصورة الأولى لالتقاط الصور المذهل من أمس."
  },
  {
    id: "2",
    likesCount: 4,
    createdAt: "2017-03-24T18:18",
    user: users[1],
    content: "إذا كنت ترغب في ذلك ، فيرجى قول ذلك وقل لي ما تريد رؤيته بعد ذلك!"
  },
  {
    id: "3",
    likesCount: 3,
    createdAt: "2017-03-24T18:18",
    user: users[3],
    content: "إذا غاب أحدهم عن ذلك ، تحقق من الأغنية الجديدة بنظام الانتقام!"
  },
  {
    id: "4",
    likesCount: 2,
    createdAt: "2017-03-24T18:18",
    user: users[4],
    content: "أعتقد أنهم سيعودون إلى جذورهم"
  },
  {
    id: "5",
    likesCount: 1,
    createdAt: "2017-03-24T18:18",
    user: users[7],
    content: "أنت فقط لا ينظر إليها"
  },
  {
    id: "6",
    likesCount: 3,
    createdAt: "2017-03-24T18:18",
    user: users[8],
    content: "ليس هناك أي شخص ينتمي، والحسرة المؤلمة وحدها"
  },
  {
    id: "7",
    likesCount: 12,
    createdAt: "2017-03-24T18:18",
    user: users[9],
    content: "في الختام ، أعتقد أن الطبيب المتعلم جيدًا بدون شخصية جيدة"
  },
  {
    id: "8",
    likesCount: 4,
    createdAt: "2017-03-24T18:18",
    user: users[10],
    content: "هو مواطن نموذجي في الفصول الدراسية لدينا"
  }
]

export const posts: PostView[] = [
  {
    id: "1",
    content: "مرحبا! على الجميع الاطلاع على هذه الصور المذهلة التي أطلقها صديقي في الأسبوع الماضي. إليك أحدهم ... اترك تعليقًا لطيفًا!",
    user: users[0],
    likesCount: 8,
    shareCount: 10,
    commentsCount: 3,
    comments: [comments[0], comments[1], comments[2],],
    createdAt: "2017-03-24T18:18"
  },
  {
    id: "2",
    content: "كيف يتم تعديل أسعار الفائدة؟",
    user: users[2],
    likesCount: 32,
    shareCount: 3,
    commentsCount: 2,
    comments: [comments[0], comments[1]],
    createdAt: "2017-03-24T18:18"
  },
  {
    id: "3",
    content: "اريد كتاب الحياة السعيدة",
    user: users[7],
    likesCount: 32,
    shareCount: 3,
    commentsCount: 2,
    comments: [comments[0], comments[1]],
    createdAt: "2017-03-24T18:18"
  }


]


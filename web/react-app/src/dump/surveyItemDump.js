const surveyItems = [
  { type: 'test_1', code: 'type_1_1', order: 1, title: '나는 어떠한 과제나 시험이라도 잘 해낼 수 있다고 생각 한다.', result: '자신 있게 성공했던 사례를 떠올리며 나만의 자신감UP 마법의 문장을 만들어 마음 속으로 외친다.'},
  { type: 'test_1', code: 'type_1_2', order: 1, title: '나는 어떤 일을 하기로 마음먹으면 바로 시작한다.', result: '중요하지 않은 일에 집착하지 않고 중요하고 소중한 일을 먼저 한다.'},
  { type: 'test_1', code: 'type_1_3', order: 1, title: '좋아하지 않는 과목이라도 열심히 공부한다.', result: 'No Sweat, No Sweet. 지루하고 힘든 과목을 가장 아끼는 전략 과목으로 만든다.'},
  { type: 'test_1', code: 'type_1_4', order: 1, title: '성적이 오르면 뿌듯함을 느낀다.', result: '공부는 나를 위한 소중한 일이다. 남이 알아주지 않아도 스스로를 격려하고 칭찬해준다.'},
  { type: 'test_1', code: 'type_1_5', order: 1, title: '나는 공부가 아니어도 성공할 수 있다고 생각한다.', result: '나는 공부한다. 내면의 아름다움을 가꾸기 위해서.'},
  { type: 'test_1', code: 'type_1_6', order: 1, title: '나는 내가 수업시간에 배우는 내용이 나에게 도움이 된다고 생각한다.', result: '쓸모 없어 보이는 것들이 가장 귀중한 보물이 된다. 나는 모든 수업시간에 집중한다.'},
  { type: 'test_1', code: 'type_1_7', order: 1, title: '나는 시험을 볼 때 불안하고 초조하다.', result: '시험은 평가가 아니다. 나의 실력을 뽐내는 무대이다. 나는 시험을 즐겁게 맞이한다.'},
  { type: 'test_1', code: 'type_1_8', order: 1, title: '나는 일단 한 번 시작한 일을 반드시 끝마쳐야 직성이 풀린다.', result: '지금까지의 노력이 물거품이 되지 않도록 한번 시작한 일은 정성스레 정리하고 마무리 한다.'},
  { type: 'test_1', code: 'type_1_9', order: 1, title: '나는 내 친구들 중 라이벌의식을 느끼는 친구가 있다.', result: '좋은 경쟁은 서로의 성장을 위한 파트너십이다. 경쟁을 지혜롭게 활용하자.'},
  { type: 'test_1', code: 'type_1_10', order: 1, title: '나는 방학 때에도 틈틈이 공부를 해두는 편이다.', result: '방학 계획표를 짜서 다음학기에 목표를 성취한다.'},
  { type: 'test_1', code: 'type_1_11', order: 1, title: '나는 누가 시키지 않아도 평소에 계획적으로 공부한다.', result: '내가 이룰 목표를 항상 마음 속에 그리며 스스로 공부 계획을 짜고 실천한다.'},
  { type: 'test_1', code: 'type_1_12', order: 1, title: '나는 수업이 끝난 후 쉬는 시간에 노트 필기와 교과서를 보며 중요한 부분을 체크한다.', result: '틈새시간이 모여 커다란 시간의 바다가 된다. 쉬는 시간에 예습 복습을 실천한다.'},
  { type: 'test_1', code: 'type_1_13', order: 1, title: '나는 다음 진도를 나가기 전에 지난 시간에 배운 내용을 훑어본다.', result: '한 번 공부한 내용은 3일이면 잊어버리지만 3번 공부한 내용은 평생을 간다. 새 진도를 나가기 전에 반드시 앞선 단원을 복습한다.'},
  { type: 'test_1', code: 'type_1_14', order: 1, title: '나는 책의 연습문제나 단원의 마무리 내용을 잘 살핀다.', result: '메타인지 향상법: 연습문제와 단원 요약을 꼼꼼하게 풀어보고 이해한다.'},
  { type: 'test_1', code: 'type_1_15', order: 1, title: '나는 미리 교재를 읽어본 후에 수업에 참여하는 편이다.', result: '나무만 보고 숲을 조망하지 못하면 길을 잃어버린다. 전체 내용을 미리 예습하고 수업시간에 세부내용을 이해한다.'},
  { type: 'test_1', code: 'type_1_16', order: 1, title: '나는 다음 수업 시간에 선생님께서 어떤 부분을 중요하게 말씀하실지 추측해본다.', result: '메타인지 향상법: 내가 선생님이라면 다음 단원에서 무엇을 중요하게 가르칠지 생각해보자.'},
  { type: 'test_1', code: 'type_1_17', order: 1, title: '나는 수업시간에 배우는 내용이 나에게 도움이 된다고 생각한다.', result: '쓸모 없어 보이는 것들이 가장 쓸모 있는 보물이 된다. 나는 모든 수업시간에 집중한다.'},
  { type: 'test_1', code: 'type_1_18', order: 1, title: '공부를 열심히 해야만 하는 나만의 명확한 이유가 있다.', result: '스스로 찾은 공부의 이유는 최고의 동기부여가 된다. 나는 나만의 공부의 이유를 찾는다.'},
  { type: 'test_1', code: 'type_1_19', order: 1, title: '나는 미래에 하고 싶은 직업이 있다.', result: '미래의 내 직업을 구체적으로 상상해보자. 그 상상은 반드시 현실이 된다.'},
  { type: 'test_1', code: 'type_1_20', order: 1, title: '나는 시험을 대비해 목표점수를 정해놓고 공부를 한다.', result: '내 능력을 200% 발휘하기 위해 구체적 목표점수를 설정하고 공부하자..'},
  { type: 'test_1', code: 'type_1_21', order: 1, title: '계획을 미리 세우고 그것에 따라 학습한다.', result: '진짜 실력향상을 위해 벼락치기가 아닌 계획하고 공부하는 습관을 기르자.'},
  { type: 'test_1', code: 'type_1_22', order: 1, title: '나는 주어진 시간에 계획한 대로 학습과제를 마칠 수 있다.', result: '계획은 나와의 약속이고 나는 한 번 세운 계획은 반드시 지킨다.'},
  { type: 'test_1', code: 'type_1_23', order: 1, title: '나는 나만의 계획표가 있다.', result: '목표를 이루는 첫걸음: 나만의 학업계획표를 만든다.'},
  { type: 'test_1', code: 'type_1_24', order: 1, title: '나는 무슨 일을 할 때든 계획을 세우는 편이다.', result: '계획을 세우다 보면 메타인지 능력이 향상된다. 나는 계획을 세우고 공부한다.'},
  { type: 'test_1', code: 'type_1_25', order: 1, title: '나는 내가 만든 방학 계획표를 잘 지킨다.', result: '뿌린 만큼 거둔다. 방학 계획표를 수립하고 성실하게 실천한다.'},
  { type: 'test_1', code: 'type_1_26', order: 1, title: '내가 공부하기로 정해놓은 시간은 반드시 지킨다.', result: '나는 공부하기로 계획한 시간은 반드시 지킨다.'},
  { type: 'test_1', code: 'type_1_27', order: 1, title: '나는 수업시간에 선생님 말씀에 집중을 잘 한다.', result: '나는 수업시간에 무조건 집중한다.'},
  { type: 'test_1', code: 'type_1_28', order: 1, title: '나는 공부할 때 집중을 잘 한다.', result: '놀 때는 확실히 놀고 공부시간에는 공부에만 집중한다.'},
  { type: 'test_1', code: 'type_1_29', order: 1, title: '나는 공부할 때 일정한 시간을 정해두고 그 시간을 지킨다.', result: '실제로 공부할 수 있는 시간을 철저하게 계획한다. 그리고 그 계획을 심플하게 실천한다.'},
  { type: 'test_1', code: 'type_1_30', order: 1, title: '등하교시간과 같은 잠깐의 시간에도 무언가 하려고 애쓴다.', result: '머리를 어지럽히는 게임이나 유튜브를 제외하고 무엇이든 나에게 도움이 되는 일이라면 틈새시간을 활용한다.'},
  { type: 'test_1', code: 'type_1_31', order: 1, title: '방학이나 주말처럼 시간이 많을 때에 더욱 높은 성취도를 올린다.', result: '자습시간에 비로소 그날 배웠던 내용을 정리할 수 있다. 방학과 주말을 나의 목표점수를 이루기 위한 시간으로 활용한다.'},
  { type: 'test_1', code: 'type_1_32', order: 1, title: '우리집은 화목한 편이다.', result: '고민이 있거나 마음이 심란하면 멘토와 이야기를 나누자. 공감과 위로를 받고 앞으로 나아갈 안정감과 자신감을 얻을 수 있다..'},
  { type: 'test_1', code: 'type_1_33', order: 1, title: '고민이 있거나 마음이 심란하면 멘토와 이야기를 나누자. 공감과 위로를 받고 앞으로 나아갈 안정감과 자신감을 얻을 수 있다..', result: ''},
  { type: 'test_1', code: 'type_1_34', order: 1, title: '힘든 일이 생기면 언제든지 부모님께 솔직하게 말할 수 있다.', result: '마음의 아픔은 털어놓지 않으면 치유되지 않는다. 서로 사랑하고 신뢰하는 사람에게 나의 마음을 이야기한다.'},
  { type: 'test_1', code: 'type_1_35', order: 1, title: '시험공부 할 때 시험에 어떤 것이 나올까를 미리 생각해본다.', result: '같은 시간을 공부해도 다른 결과를 얻는 비법: 멍하게 공부하지 않고 예상문제를 생각하며 공부한다.'},
  { type: 'test_1', code: 'type_1_36', order: 1, title: '시험지를 제출하기 전에 답을 잘 썼는지 확인한다.', result: '밀려 쓴 OMR카드는 실수가 아니라 실력이다. 마지막 5분은 반드시 답안 확인에 투자한다.'},
  { type: 'test_1', code: 'type_1_37', order: 1, title: '시험을 대비해서 예상문제를 만들어본다.', result: '예습과 복습이 차이를 만든다. 오답노트를 만들듯이 예상문제노트를 만든다.'},
  { type: 'test_1', code: 'type_1_38', order: 1, title: '나만의 암기법이 있다.', result: '기억과 암기는 공부의 기본이다. 나만의 암기법을 습득한다.'},
  { type: 'test_1', code: 'type_1_39', order: 1, title: '복잡한 내용은 그림이나 도표를 이용해서 기억한다.', result: '그림이나 마인드맵을 그려가며 공부하자. 어려운 개념도 내 것으로 만들 수 있다.'},
  { type: 'test_1', code: 'type_1_40', order: 1, title: '암기사항은 한 번에 암기하려고 하지 않고, 여러 번에 걸쳐 암기되도록 한다.', result: '긴 시간을 두고 한 번에 암기하는 것보다 짧은 시간 여러 번 암기하는 것이 장기기억 보존에 도움이 된다. 틈새시간을 활용하여 암기사항을 반복해서 외운다.'},
  { type: 'test_1', code: 'type_1_41', order: 1, title: '공부할 때 요점을 파악하면서 정리한다.', result: '요점을 파악하고 나의 노트에 내가 이해한 내용을 나의 언어로 정리한다.'},
  { type: 'test_1', code: 'type_1_42', order: 1, title: '수업시간에 배운 것을 알기 쉽도록 표나 도식을 이용해 정리한다.', result: '수업시간에 배운 개념을 쉬는 시간에 그림이나 도표를 그려 복습한다.'},
  { type: 'test_1', code: 'type_1_43', order: 1, title: '공부할 때, 중요한 내용과 그렇지 않은 내용을 구분하여 공부한다.', result: '중요한 내용과 중요하지 않은 내용을 구분하여 노트에 정리하고 다음 수업시간에 내가 중요하다고 파악한 것이 정말 중요한지 확인한다.'},
]


const getSurveyItems = () => {
  return surveyItems;
}

export {getSurveyItems};


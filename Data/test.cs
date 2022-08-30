namespace BracketBuff.Data
{
    public class test
    {
        public void AddStats(ref List<List<String>> statValues, ref List<String> statNames)
        {
            for (int i = 0; i < 10; i++) {
                statNames.Add(i.ToString());
                List<String> temp = new List<String>();
                for (int j = 0; j < 10; j++) {
                    temp.Add(j.ToString());
                }
                statValues.Add(temp);
            }
        }
    }
}

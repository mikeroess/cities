import os

#script to remove duplicates
with open('zipdb_unfiltered.csv', 'r') as unfiltered:
    os.system('touch zipdb.csv')
    with open('zipdb.csv', 'w') as filtered:
        last_city, last_state  = None, None
        for line in unfiltered:
            zip_code, city, state = line.split(',')
            if city == last_city and state == last_state: continue
            csv_line = ','.join([city, state])
            filtered.write(csv_line)
            last_city, last_state = city, state

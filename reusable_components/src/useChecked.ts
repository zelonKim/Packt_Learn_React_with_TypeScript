import { useState, useEffect } from 'react'

type Parmas = {
    checkedIds?: IdValue[];
    onCheckedIdsChange?: (checkedIds: IdValue[]) => void
}
